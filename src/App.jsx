import './App.css';
import Header from './components/Header/Header';
import NoteNav from './layouts/NoteNav/NoteNav';
import NoteBody from './layouts/NoteBody/NoteBody';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteList from './components/NoteList/NoteList';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

function App() {

  const [journalItems, setJournalItems] = useState([]);

  const addJournalItem = (journalItem) => {
    setJournalItems((oldJournalItems) => [...oldJournalItems, {
      id: Math.max(...oldJournalItems.map((el) => (el.id))) + 1,
      title: journalItem.title,
      text: journalItem.text,
      date: new Date(journalItem.date)
    }]);
  };

  return (
    <div className='app'>
      <NoteNav>
        <Header></Header>
        <NoteAddButton/>
        <NoteList items={journalItems}/>
      </NoteNav>
      <NoteBody>
        <JournalForm onSubmit={addJournalItem}/>
      </NoteBody>
    </div>
  );
}

export default App;
