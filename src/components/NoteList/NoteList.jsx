import './NoteList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

function NoteList({ items }) {

  if (items.length === 0) {
    return (
      <div className="note-list">
        <p className="note-list__empty">Добавьте новое воспоминание</p>
      </div>
    );
  } else {
    const sortJournalItems = (a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    };

    return (
      <div className="note-list">
        {items.sort(sortJournalItems).map(el => (
            <CardButton key={el.id}>
              <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
               />
            </CardButton>
          ))}
      </div>
    );
  }
}

export default NoteList;