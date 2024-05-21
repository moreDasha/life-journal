import { useContext, useMemo } from 'react';
import styles from './NoteList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { TypeContext } from '../../context/type.context';

function NoteList({ items, showItem }) {
  const { typeId } = useContext(TypeContext);
  const filteredItems = useMemo(() => items.filter((el) => el.typeId === typeId), [items, typeId]);

  if (filteredItems.length) {
    const sortJournalItems = (a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    };

    return (
      <div className={styles['note-list']}>
        {filteredItems
          .sort(sortJournalItems)
          .map((el) => (
            <CardButton className={styles['note-list-item']} key={el.id} onClick={() => showItem(el)}>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
      </div>
    );

  } else {
    return (
      <div className={styles['note-list']}>
        <p className={styles['note-list__empty']}>Добавьте новое воспоминание</p>
      </div>
    );
  }
}

export default NoteList;
