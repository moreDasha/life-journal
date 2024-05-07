import styles from './NoteBody.module.css';

function NoteBody({ children }) {
  return (
    <div className={styles['note-body']}>
      {children}
    </div>
  );
}

export default NoteBody;