import styles from './Apartment.module.scss';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useNavigate } from 'react-router';
import type { Apartment } from '@/lib/types';
import { HeartIcon, Pen, Trash } from 'lucide-react';
import { cn } from '@/lib/utils.ts';
import { useFavorites } from '@/lib/context/useFavoriteContext.tsx';
import ApartmentApi from '@/lib/api/apartmentApi.ts';
import { toast } from 'sonner';

interface ApartmentCardProps {
  apartment: Apartment;
  vertical?: boolean;
  canEdit?: boolean;
}

export const ApartmentCard = ({ apartment, vertical, canEdit }: ApartmentCardProps) => {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const deleteApartment = async () => {
    await ApartmentApi.deleteApartment(apartment.id);
    toast.success('Оголошення видалено!');
    location.reload();
  };

  return (
    <div className={cn(styles.card, { [styles.vertical]: vertical })}>
      <Carousel className="w-full max-w-[300px]">
        <CarouselContent>
          {!apartment.photosUrls ? (
            <CarouselItem className="relative">
              <img src={apartment.photoUrl} alt="apartment-picture" className={styles.img} />
              <HeartIcon
                onClick={() =>
                  isFavorite(apartment.id) ? removeFavorite(apartment.id) : addFavorite(apartment)
                }
                fill={isFavorite(apartment.id) ? '#ff2056' : 'none'}
                stroke="#FFF"
                className="absolute top-2 right-2 size-8 hover:fill-rose-500 cursor-pointer"
              />
            </CarouselItem>
          ) : (
            <>
              {apartment.photosUrls.map((photo, index) => (
                <CarouselItem key={index} className="relative">
                  <img src={photo} alt="apartment-picture" className={styles.img} />
                  <HeartIcon
                    onClick={() =>
                      isFavorite(apartment.id)
                        ? removeFavorite(apartment.id)
                        : addFavorite(apartment)
                    }
                    fill={isFavorite(apartment.id) ? '#ff2056' : 'none'}
                    stroke="#FFF"
                    className="absolute top-2 right-2 size-8 hover:fill-rose-500 cursor-pointer"
                  />
                </CarouselItem>
              ))}
            </>
          )}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col justify-between">
        <div className={styles.cardInfo}>
          <div className="flex justify-between">
            <h3 className="font-bold md:text-2xl text-4xl">$ {apartment.price}</h3>
            {canEdit && (
              <div>
                <Button
                  variant="ghost"
                  className="cursor-pointer"
                  onClick={() => navigate(`/apartment/edit/${apartment.id}`)}
                >
                  <Pen />
                </Button>
                <Button variant="ghost" className="cursor-pointer" onClick={deleteApartment}>
                  <Trash />
                </Button>
              </div>
            )}
          </div>
          <span className="text-sm text-gray-500">
            {apartment.street}, {apartment.district}
          </span>
          <p className="text-sm md:line-clamp-2 max-w-full md:max-w-64">{apartment.description}</p>
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
