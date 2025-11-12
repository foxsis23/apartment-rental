import styles from './Header.module.scss';
import { Link } from 'react-router';
import { navItems } from '@/lib/constants';
import { FavoriteSheet } from '@/components/FavoriteSheet';

export const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.navigation}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} className={styles.navItem}>
            {item.name}
          </Link>
        ))}
      </div>
      <FavoriteSheet />
    </nav>
  );
};
