import Header from './components/Header/Header';
import NoteNav from './layouts/NoteNav/NoteNav';
import NoteBody from './layouts/NoteBody/NoteBody';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteList from './components/NoteList/NoteList';
import JournalForm from './components/JournalForm/JournalForm';
import { useEffect, useState } from 'react';
import Main from './layouts/Main/Main';

function App() {

  const [journalItems, setJournalItems] = useState([]);

  //забираем данный из локалсторедж
  useEffect(() => {
    const journalItemsData = JSON.parse(localStorage.getItem('journalItemsData'));
    if (journalItemsData) {
      setJournalItems(journalItemsData.map((item) => ({
        ...item,
        date: new Date(item.date)
      })));
    }
  }, []);

  //записываем данные в локалсторедж
  useEffect(() => {
    if(journalItems.length) {
      localStorage.setItem('journalItemsData', JSON.stringify(journalItems));
    }
  }, [journalItems]);

  const addJournalItem = (journalItem) => {
    setJournalItems((oldJournalItems) => [...oldJournalItems, {
      id: oldJournalItems.length > 0 ? Math.max(...oldJournalItems.map((el) => (el.id))) + 1 : 1,
      title: journalItem.title,
      text: journalItem.text,
      date: new Date(journalItem.date)
    }]);
  };

  return (
    <div className='app'>
      <Header/>
      <Main>
        <NoteNav>
          <NoteAddButton/>
          <NoteList items={journalItems}/>
        </NoteNav>
        <NoteBody>
          <JournalForm onSubmit={addJournalItem}/>
        </NoteBody>
      </Main>
    </div>
  );
}

export default App;
