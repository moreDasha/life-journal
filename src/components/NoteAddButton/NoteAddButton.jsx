import styles from './NoteAddButton.module.css';
import CardButton from '../CardButton/CardButton';

function NoteAddButton({ clearForm }) {
  return (
    <CardButton className={styles['note-add-button']} onClick={clearForm}>
      <span className={styles['note-add-button__icon']}></span>
      Новое воспоминание
    </CardButton>
  );
}

export default NoteAddButton;