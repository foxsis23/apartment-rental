import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import styles from './ApartmentDetail.module.scss';
import type { Apartment } from '@/lib/types';
import ApartmentApi from '@/lib/api/apartmentApi.ts';
import { Spinner } from '@/components/ui/spinner.tsx';
import { useParams } from 'react-router';

export function ApartmentDetailView() {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const params = useParams();

  const [selected, setSelected] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const openPhoto = (url: string) => {
    setSelected(url);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closePhoto = () => {
    setIsVisible(false);
    setTimeout(() => setSelected(null), 200);
  };

  useEffect(() => {
    ApartmentApi.getApartmentById(Number(params.id)).then((apartment) => setApartment(apartment));
  }, [params.id]);

  if (!apartment)
    return (
      <Spinner className="size-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    );

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={apartment.photosUrls[0]}
            alt={apartment.description}
            className="rounded-2xl shadow-md object-cover w-full md:w-[400px] h-[260px]"
          />
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <p className="text-muted-foreground">{apartment.description}</p>
          <p className="text-xl font-bold">
            ${apartment.price.toLocaleString()}
            <span className="text-base font-normal text-muted-foreground"> / місяць</span>
          </p>
        </div>
      </div>

      <Table className={styles.tableOrange}>
        <TableHeader>
          <TableRow>
            <TableHead>Параметр</TableHead>
            <TableHead>Значення</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Район</TableCell>
            <TableCell>{apartment.district}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Адреса</TableCell>
            <TableCell>
              {apartment.street}, {apartment.buildingNum}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Кімнат</TableCell>
            <TableCell>{apartment.roomsCount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Поверх</TableCell>
            <TableCell>
              {apartment.floor} з {apartment.buildingFloorCount}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Площа</TableCell>
            <TableCell>{apartment.area} м²</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Меблі</TableCell>
            <TableCell>{apartment.furnitureType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Можна з тваринами</TableCell>
            <TableCell>{apartment.isPetFriendly ? '✅ Так' : '❌ Ні'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Можна з дітьми</TableCell>
            <TableCell>{apartment.isChildFriendly ? '✅ Так' : '❌ Ні'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Власник</TableCell>
            <TableCell>
              {apartment.ownerName} <br />
              <a href={`tel:${apartment.phoneNumber}`} className="text-orange-600 hover:underline">
                {apartment.phoneNumber}
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Додаткові фото</TableCell>
            <TableCell className="flex gap-2 flex-wrap">
              {apartment.photosUrls.slice(1).map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`photo-${i}`}
                  className="w-20 h-16 rounded-lg border object-cover cursor-pointer"
                  onClick={() => openPhoto(url)}
                />
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      {selected && (
        <div
          className={`${styles.modalOverlay} ${isVisible ? styles.active : ''}`}
          onClick={closePhoto}
        >
          <img
            src={selected}
            alt="full"
            className={`${styles.photoModal} ${isVisible ? styles.active : ''}`}
          />
        </div>
      )}
    </div>
  );
}
