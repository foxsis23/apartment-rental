import styles from '@/views/AddApartmentView/AddApartmentView.module.scss';
import { ApartmentForm } from '@/components/ApartmentForm';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import type { Apartment } from '@/lib/types';
import ApartmentApi from '@/lib/api/apartmentApi.ts';
import { Spinner } from '@/components/ui/spinner.tsx';

export const EditApartmentView = () => {
  const params = useParams();
  const [apartment, setApartment] = useState<Apartment | null>(null);

  useEffect(() => {
    ApartmentApi.getApartmentById(Number(params.id)).then((apartment) => setApartment(apartment));
  }, [params.id]);

  if (!apartment)
    return (
      <Spinner className="size-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    );

  return (
    <section className={styles.main}>
      <h1 className="text-3xl font-bold">Редагувати оголошення</h1>
      {apartment && <ApartmentForm apartment={apartment} />}
    </section>
  );
};
