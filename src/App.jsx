import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import Header from './components/Header/Header';
import NoteNav from './layouts/NoteNav/NoteNav';
import NoteBody from './layouts/NoteBody/NoteBody';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteList from './components/NoteList/NoteList';
import JournalForm from './components/JournalForm/JournalForm';
import Main from './layouts/Main/Main';
import { TypeContextProvider } from './context/type.context';

const mapItems = (items) => {
  if (!items) {
    return [];
  }
  return items.map((el) => ({...el, date: new Date(el.date)}));
};

function App() {

  const [items, setItems] = useLocalStorage('data');
  const [selectedItem, setSelectedItem] = useState({});

  const addItem = (item) => {
    if (item.id) {
      setItems([...mapItems(items).map(i => {
        if (i.id === item.id) {
          return {...item};
        } else {
          return i;
        }
      })
    ]);
    } else {
      setItems([...mapItems(items), {
        ...item,
        id: items ? Math.max(...items.map((el) => (el.id))) + 1 : 1,
        date: new Date(item.date)
      }]);
    }
  };

  const removeItem = (id) => {
    setItems([...items.filter(i => i.id !== id)]);
  };

  return (
    <TypeContextProvider>
      <div className='app'>
        <Header/>
        <Main>
          <NoteNav>
            <NoteAddButton clearForm={() => setSelectedItem({})}/>
            <NoteList items={mapItems(items)} showItem={setSelectedItem}/>
          </NoteNav>
          <NoteBody>
            <JournalForm onSubmit={addItem} onRemove={removeItem} data={selectedItem}/>
          </NoteBody>
        </Main>
      </div>
    </TypeContextProvider>
  );
}

export default App;
