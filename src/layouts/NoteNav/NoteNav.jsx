import styles from './NoteNav.module.css';

function NoteNav({ children }) {
  return (
    <nav className={styles['note-nav']}>
      {children}
    </nav>
  );
}

export default NoteNav;