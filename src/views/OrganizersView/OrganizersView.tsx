import styles from './OrganizersView.module.scss';
import { Separator } from '@/components/ui/separator.tsx';
import { ApartmentCard } from '@/components/ApartmentCard';
import { Button } from '@/components/ui/button.tsx';
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import ApartmentApi from '@/lib/api/apartmentApi.ts';
import type { Apartment } from '@/lib/types';
import { Spinner } from '@/components/ui/spinner.tsx';

export const OrganizersView = () => {
  const navigate = useNavigate();
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    ApartmentApi.getAllApartments('').then((apartments) => {
      setApartments(apartments);
    });
  }, []);

  if (!apartments.length)
    return (
      <Spinner className="size-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    );

  return (
    <section className={styles.main}>
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold">Мої оголошення</h2>
        <div className="flex flex-col gap-4 overflow-y-scroll max-h-[300px]">
          {apartments.map((apartment) => (
            <ApartmentCard apartment={apartment} canEdit key={apartment.id} />
          ))}
        </div>
      </div>
      <Separator orientation="vertical" className="!h-[300px] hidden lg:block" />
      <Button
        variant="ghost"
        size="default"
        className="cursor-pointer transition ease-in duration-200 hover:scale-120"
        onClick={() => navigate('/add-apartment')}
      >
        Додати оголошення
        <PlusCircle className="size-6" />
      </Button>
    </section>
  );
};
