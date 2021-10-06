import Navigation from '../Navigation/Navigation';
import styles from './AppBar.Module.css';

export default function Appbar() {
  return (
    <header className={styles.Header}>
      <Navigation />
    </header>
  );
}