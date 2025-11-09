import { Header } from '@/components/layout/Header';
import { mockApartments } from '@/mock/mockApartments.ts';
import { ApartmentCard } from '@/components/ApartmentCard';
import ApartmentApi from '@/lib/api/apartmentApi.ts';

export const MainView = () => {
  console.log(ApartmentApi.getAllApartments());

  return (
    <>
      <Header />
      <h1 className="font-bold text-center text-4xl mt-5">Список квартир</h1>
      <main className="flex gap-4 justify-center flex-wrap mt-4 items-stretch">
        {mockApartments.map((apartment) => (
          <ApartmentCard apartment={apartment} key={apartment.id} />
        ))}
      </main>
    </>
  );
};
