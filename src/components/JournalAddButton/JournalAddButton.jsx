import styles from './JournalAddButton.module.css';
import CardButton from '../CardButton/CardButton';

function JournalAddButton({ clearForm }) {
  return (
    <CardButton className={styles['journal-add-button']} onClick={clearForm}>
      <span className={styles['journal-add-button__icon']}></span>
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;