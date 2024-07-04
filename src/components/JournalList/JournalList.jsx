import { useContext, useMemo } from 'react';
import styles from './JournalList.module.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { TypeContext } from '../../context/type.context';

function JournalList({ items, showItem, navOpen, setNavOpen }) {
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
      <div className={styles['journal-list-wrap']}>
        <div className={styles['journal-list']}>
          {filteredItems
            .sort(sortJournalItems)
            .map((el) => (
              <CardButton className={styles['journal-list-item']} key={el.id} onClick={() => {showItem(el); setNavOpen(!navOpen);}}>
                <JournalItem title={el.title} tag={el.tag} text={el.text} date={el.date} />
              </CardButton>
            ))}
        </div>
      </div>
    );

  } else {
    return (
      <div className={styles['journal-list-wrap']}>
        <p className={styles['journal-list-wrap__empty']}>Добавьте новое воспоминание</p>
      </div>
    );
  }
}

export default JournalList;
