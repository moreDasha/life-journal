import styles from './JournalBody.module.css';

function JournalBody({ children }) {
  return (
    <div className={styles['journal-body']}>
      {children}
    </div>
  );
}

export default JournalBody;