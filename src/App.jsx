import './App.css';
import Button from './components/Button/Button';
import NoteNav from './layouts/NoteNav/NoteNav';
import NoteBody from './layouts/NoteBody/NoteBody';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteList from './components/NoteList/NoteList';

function App() {

  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Curabitur cursus consequat sagittis. Suspendisse ultrices quis enim in faucibus',
      date: new Date()
    },
    {
      title: 'Поход в горы',
      text: 'Praesent euismod risus eros, eget accumsan turpis fermentum ut',
      date: new Date()
    }
  ];

  return (
    <div className='app'>
    <NoteNav>
      <NoteAddButton></NoteAddButton>
      <NoteList>
        <CardButton>
          <JournalItem
            title={data[0].title}
            text={data[0].text}
            date={data[0].date}
          />
        </CardButton>
        <CardButton>
          <JournalItem
            title={data[1].title}
            text={data[1].text}
            date={data[1].date}
          />
        </CardButton>
      </NoteList>
    </NoteNav>
    <NoteBody>
      <Button/>
    </NoteBody>
    </div>
  );
}

export default App;
