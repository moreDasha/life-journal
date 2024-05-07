import styles from './NoteList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

function NoteList({ items }) {

  if (items.length === 0) {
    return (
      <div className={styles['note-list']}>
        <p className={styles['note-list__empty']}>Добавьте новое воспоминание</p>
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
      <div className={styles['note-list']}>
        {items.sort(sortJournalItems).map(el => (
            <CardButton className={styles['note-list-item']} key={el.id}>
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