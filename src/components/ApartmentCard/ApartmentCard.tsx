import styles from './Apartment.module.scss';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router';
import type { Apartment } from '@/lib/types';

interface ApartmentCardProps {
  apartment: Apartment;
}

export const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <Carousel className="w-full max-w-[300px]">
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
          <h3 className="font-bold md:text-2xl text-4xl">$ {apartment.price}</h3>
          <span className="text-sm text-gray-500">
            {apartment.street}, {apartment.district}
          </span>
          <p className="text-sm md:line-clamp-2 md:max-w-full max-w-64">{apartment.description}</p>
          <div className={styles.cardDetails}>
            <span className={styles.cardDetail}>
              <img src="/door.svg" alt="icon" className="size-4" />
              {apartment.roomsCount} кімнат
            </span>
            <span className={styles.cardDetail}>
              <img src="/building.svg" alt="logo" className="size-4" />
              {apartment.floor} поверх
            </span>
            <span className={styles.cardDetail}>
              <img src="/pet.svg" alt="logo" className="size-4" />
              {apartment.isPetFriendly ? '✅' : '❌'}
            </span>
            <span className={styles.cardDetail}>
              <img src="/area.svg" alt="logo" className="size-4" />
              {apartment.area} м²
            </span>
          </div>
        </div>
        <Button
          variant="link"
          className="md:self-start mt-3 cursor-pointer"
          onClick={() => navigate(`/apartments/${apartment.id}`)}
        >
          Детальніше
        </Button>
      </div>
    </div>
  );
};
