import './NoteAddButton.css';
import CardButton from '../CardButton/CardButton';

function NoteAddButton() {
  return (
    <CardButton className="note-add-button">
      <span className="note-add-button__icon"></span>
      Новое воспоминание
    </CardButton>
  );
}

export default NoteAddButton;