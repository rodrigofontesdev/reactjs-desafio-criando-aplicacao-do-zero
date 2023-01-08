import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.mainHeader}>
      <div className={styles.mainHeaderContainer}>
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>
      </div>
    </header>
  );
}
