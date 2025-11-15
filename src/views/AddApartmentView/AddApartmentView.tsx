import styles from './AddApartmentView.module.scss';
import { ApartmentForm } from '@/components/ApartmentForm/ApartmentForm.tsx';

export function AddApartmentView() {
  return (
    <section className={styles.main}>
      <h1 className="text-3xl font-bold">Додати оголошення</h1>
      <ApartmentForm />
    </section>
  );
}
