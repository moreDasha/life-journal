import { useLocalStorage } from './hooks/useLocalStorage.hook';
import Header from './components/Header/Header';
import NoteNav from './layouts/NoteNav/NoteNav';
import NoteBody from './layouts/NoteBody/NoteBody';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteList from './components/NoteList/NoteList';
import JournalForm from './components/JournalForm/JournalForm';
import Main from './layouts/Main/Main';

const mapItems = (items) => {
  if (!items) {
    return [];
  }
  return items.map((el) => ({...el, date: new Date(el.date)}));
};

function App() {

  const [items, setItems] = useLocalStorage('data');

  const addItem = (item) => {
    setItems([...mapItems(items), {
      id: items ? Math.max(...items.map((el) => (el.id))) + 1 : 1,
      title: item.title,
      text: item.text,
      date: new Date(item.date)
    }]);
  };

  return (
    <div className='app'>
      <Header/>
      <Main>
        <NoteNav>
          <NoteAddButton/>
          <NoteList items={mapItems(items)}/>
        </NoteNav>
        <NoteBody>
          <JournalForm onSubmit={addItem}/>
        </NoteBody>
      </Main>
    </div>
  );
}

export default App;
