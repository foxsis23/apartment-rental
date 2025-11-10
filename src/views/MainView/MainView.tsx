import { ApartmentCard } from '@/components/ApartmentCard';
import ApartmentApi from '@/lib/api/apartmentApi.ts';
import { useEffect, useState } from 'react';
import type { Apartment } from '@/lib/types';
import { Spinner } from '@/components/ui/spinner.tsx';

export const MainView = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    ApartmentApi.getAllApartments().then((apartments) => {
      setApartments(apartments);
    });
  }, []);

  if (!apartments.length)
    return (
      <Spinner className="size-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    );

  return (
    <>
      <h1 className="font-bold text-center text-4xl my-10">Список квартир</h1>
      <main className="flex gap-6 justify-center flex-wrap mt-4 md:items-stretch items-center">
        {apartments.map((apartment) => (
          <ApartmentCard apartment={apartment} key={apartment.id} />
        ))}
      </main>
    </>
  );
};
