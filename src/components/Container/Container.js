import styles from './Container.Module.css';

export default function Container({ children }) {
  return <div className={styles.Container}>{children}</div>;
}