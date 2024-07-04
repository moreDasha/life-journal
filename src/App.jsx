import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import Header from './components/Header/Header';
import JournalNav from './layouts/JournalNav/JournalNav';
import JournalBody from './layouts/JournalBody/JournalBody';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
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
  const [selectedItem, setSelectedItem] = useState(null);

  const [navOpen, setNavOpen] = useState(false);

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
    setSelectedItem();
  };

  const clearForm = () => {
    setSelectedItem(null);
    setNavOpen(!navOpen);
  };

  return (
    <TypeContextProvider>
      <div className='app'>
        <Header navOpen={navOpen} setNavOpen={setNavOpen}/>
        <Main>
          <JournalNav navOpen={navOpen}>
            <JournalAddButton clearForm={clearForm} />
            <JournalList items={mapItems(items)} showItem={setSelectedItem} navOpen={navOpen} setNavOpen={setNavOpen}/>
          </JournalNav>
          <JournalBody>
            <JournalForm onSubmit={addItem} onRemove={removeItem} data={selectedItem}/>
          </JournalBody>
        </Main>
      </div>
    </TypeContextProvider>
  );
}

export default App;
