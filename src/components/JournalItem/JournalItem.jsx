import styles from './JournalItem.module.css';

function JournalItem({ title, date, text }) {

  const correctedDate = new Intl.DateTimeFormat('ru-RU').format(date).replaceAll('.', '/');

  return (
    <>
      <h2 className={styles['journal-item__header']}>{title}</h2>
      <div className={styles['journal-item__body']}>
        <div className={styles['journal-item__date']}>{correctedDate}</div>
        <div className={styles['journal-item__text']}>{text}</div>
      </div>
    </>
  );
}

export default JournalItem;