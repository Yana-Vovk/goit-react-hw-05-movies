import { NavLink } from 'react-router-dom';
import styles from './Navigation.Module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.Link}
      activeClassName={styles.ActiveLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={styles.Link}
      activeClassName={styles.ActiveLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;