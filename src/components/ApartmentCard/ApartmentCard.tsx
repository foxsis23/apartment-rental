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
          {apartment.photosUrls.map((photo, index) => (
            <CarouselItem key={index}>
              <img src={photo} alt="apartment-picture" className={styles.img} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col justify-between">
        <div className={styles.cardInfo}>
          <h3 className="font-bold text-emerald-500 text-2xl">$ {apartment.price}</h3>
          <span className="text-sm text-gray-500">
            {apartment.street}, {apartment.district}
          </span>
          <p className="text-sm line-clamp-2">{apartment.description}</p>
          <div className={styles.cardDetails}>
            <span className={styles.cardDetail}>{apartment.roomsCount} кімнат</span>
            <span className={styles.cardDetail}>меблі {apartment.furnitureType ? '+' : '-'}</span>
            <span className={styles.cardDetail}>{apartment.floor} поверх</span>
            <span className={styles.cardDetail}>площа {apartment.area} м²</span>
          </div>
        </div>
        <Button variant="link" className="self-start mt-3 cursor-pointer">
          Детальніше
        </Button>
      </div>
    </div>
  );
};
