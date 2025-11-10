import { AddApartmentForm } from '@/components/AddApartmentForm';
import styles from './AddApartmentView.module.scss';

export function AddApartmentView() {
  return (
    <section className={styles.main}>
      <h1 className="text-3xl font-bold">Додати оголошення</h1>
      <AddApartmentForm />
    </section>
  );
}
