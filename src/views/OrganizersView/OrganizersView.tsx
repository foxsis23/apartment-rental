import styles from './OrganizersView.module.scss';
import { Separator } from '@/components/ui/separator.tsx';
import { mockApartments } from '@/lib/mock/mockApartments.ts';
import { ApartmentCard } from '@/components/ApartmentCard';
import { Button } from '@/components/ui/button.tsx';
import { PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export const OrganizersView = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold">Мої оголошення</h2>
        <div className="flex flex-col gap-4 overflow-y-scroll max-h-[300px]">
          {mockApartments.map((apartment) => (
            <ApartmentCard apartment={apartment} key={apartment.id} />
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
