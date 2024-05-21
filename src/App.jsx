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

  const addItem = (item) => {
    setItems([...mapItems(items), {
      ...item,
      id: items ? Math.max(...items.map((el) => (el.id))) + 1 : 1,
      date: new Date(item.date)
    }]);
  };

  return (
    <TypeContextProvider>
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
    </TypeContextProvider>
  );
}

export default App;
