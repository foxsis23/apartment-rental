import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router';
import { navItems } from '@/lib/constants';
import { FavoriteSheet } from '@/components/FavoriteSheet';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className={styles.header}>
      <div className={styles.navigation}>
        <img
          src="/logo.png"
          alt="logo"
          className={styles.logo}
          onClick={() => navigate('/intro')}
        />
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
