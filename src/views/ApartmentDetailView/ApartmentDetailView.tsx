import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from '@/components/ui/table';
import { mockApartments } from '@/mock/mockApartments.ts';

export function ApartmentDetailView() {
  const apartment = mockApartments[0];

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
          <p className="text-xl font-bold text-green-600">
            ${apartment.price.toLocaleString()}
            <span className="text-base font-normal text-muted-foreground"> / місяць</span>
          </p>
        </div>
      </div>

      <Table>
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
              <span className="text-muted-foreground">{apartment.phoneNumber}</span>
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
                  className="w-20 h-16 rounded-lg border object-cover"
                />
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
