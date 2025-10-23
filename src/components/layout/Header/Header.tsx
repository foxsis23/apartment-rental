import styles from './Header.module.scss';
import { navItems } from '@/constants';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <nav className={styles.header}>
      {navItems.map((item) => (
        <Link to={item.path} key={item.path} className={styles.navItem}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
