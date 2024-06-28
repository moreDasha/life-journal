import styles from './JournalNav.module.css';

function JournalNav({ children }) {
  return (
    <nav className={styles['journal-nav']}>
      {children}
    </nav>
  );
}

export default JournalNav;