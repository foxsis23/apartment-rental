import styles from './Header.module.scss';
import { Link } from 'react-router';
import { navItems } from '@/lib/constants';

export const Header = () => {
  return (
    <nav className={styles.header}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      {navItems.map((item) => (
        <Link to={item.path} key={item.path} className={styles.navItem}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};
