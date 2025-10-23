import type { Apartment } from '@/types';
import styles from './Apartment.module.scss';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx';
import { Button } from '@/components/ui/button.tsx';

interface ApartmentCardProps {
  apartment: Apartment;
}

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  return (
    <div className={styles.card}>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {apartment.photos.map((photo, index) => (
            <CarouselItem key={index}>
              <img src={photo} alt="apartment-picture" className={styles.img} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className={styles.cardInfo}>
        <h3 className="font-bold text-emerald-500 text-2xl">$ {apartment.pricePerMonth}</h3>
        <span className="text-sm text-gray-500">
          {apartment.address}, {apartment.district}
        </span>
        <p className="text-sm line-clamp-2">{apartment.description}</p>
        <div className={styles.cardDetails}>
          <span className="p-2 bg-gray-400 text-white rounded-md">
            {apartment.roomsCount} кімнат
          </span>
          <span className="p-2 bg-gray-400 text-white rounded-md">
            меблі {apartment.furnished ? '+' : '-'}
          </span>
          <span className="p-2 bg-gray-400 text-white rounded-md">
            pet Friendly {apartment.petsAllowed ? '+' : '-'}
          </span>
          <span className="p-2 bg-gray-400 text-white rounded-md">
            {apartment.floor} поверх з {apartment.totalFloors}
          </span>
          <span className="p-2 bg-gray-400 text-white rounded-md">площа {apartment.area} м²</span>
        </div>
        <Button variant="link" className="self-start mt-3">
          Детальніше
        </Button>
      </div>
    </div>
  );
};
