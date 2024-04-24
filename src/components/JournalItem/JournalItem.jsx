import './JournalItem.css';

function JournalItem() {
  const title = 'Подготовка к обновлению курсов';
  const date = new Date();
  const text = 'Curabitur cursus consequat sagittis. Suspendisse ultrices quis enim in faucibus';

  return (
    <div className="journal-item">
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">{date.toString()}</div>
        <div className="journal-item__text">{text}</div>
      </div>
    </div>
  );
}

export default JournalItem;