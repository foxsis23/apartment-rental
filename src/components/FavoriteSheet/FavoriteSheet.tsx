import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet.tsx';
import { Button } from '@/components/ui/button.tsx';
import { HeartIcon } from 'lucide-react';
import { ApartmentCard } from '@/components/ApartmentCard';
import { useFavorites } from '@/lib/context/useFavoriteContext.tsx';

export const FavoriteSheet = () => {
  const { favorites } = useFavorites();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          Обране
          <HeartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Обрані квартири</SheetTitle>
        </SheetHeader>
        <section className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="flex flex-col gap-4">
            {!favorites ? (
              <span>Немає обраних квартир :(</span>
            ) : (
              <>
                {favorites.map((apartment) => (
                  <ApartmentCard apartment={apartment} key={apartment.id} vertical />
                ))}
              </>
            )}
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
};
