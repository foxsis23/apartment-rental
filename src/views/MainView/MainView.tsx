import { ApartmentCard } from '@/components/ApartmentCard';
import ApartmentApi from '@/lib/api/apartmentApi.ts';
import { useEffect, useState } from 'react';
import type { Apartment } from '@/lib/types';
import { Spinner } from '@/components/ui/spinner.tsx';
import { Filters } from '@/components/Filters';

export const MainView = () => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [filters, setFilters] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    ApartmentApi.getAllApartments(filters)
      .then((apartments) => {
        setApartments(apartments);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filters]);

  if (loading) {
    return (
      <Spinner className="size-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    );
  }

  if (!loading && apartments.length === 0) {
    return (
      <div className="flex flex-col gap-4 mt-10 items-center">
        <Filters onApply={(values) => setFilters(values)} />
        <span className="text-lg text-muted-foreground">
          Немає результатів. Спробуйте змінити фільтри
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-10">
      <h1 className="font-bold text-center text-4xl">Список квартир</h1>
      <Filters onApply={(values) => setFilters(values)} />
      <main className="flex gap-6 justify-center flex-wrap mt-4 md:items-stretch items-center">
        {apartments.map((apartment) => (
          <ApartmentCard apartment={apartment} key={apartment.id} />
        ))}
      </main>
    </div>
  );
};
