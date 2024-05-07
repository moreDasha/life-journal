import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm ({ onSubmit }) {

  const [validState, setValidState] = useState({
    title: true,
    date: true,
    text: true
  });

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isValid = true;

    if (!formProps.title?.trim().length) {
      isValid = false;
      setValidState((state) => ({...state, title: false}));
    } else {
      isValid = true;
      setValidState((state) => ({...state, title: true}));
    }
    if (!formProps.date) {
      isValid = false;
      setValidState((state) => ({...state, date: false}));
    } else {
      isValid = true;
      setValidState((state) => ({...state, date: true}));
    }
    if (!formProps.text?.trim().length) {
      isValid = false;
      setValidState((state) => ({...state, text: false}));
    } else {
      isValid = true;
      setValidState((state) => ({...state, text: true}));
    }

    if (isValid) {
      onSubmit(formProps);
    } else {
      return;
    }
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input className="journal-form-input" type="text" name="title" style={{borderColor: validState.title ? '#fff' : 'red'}}/>
      <input className="journal-form-input" type="date" name="date" style={{borderColor: validState.date ? '#fff' : 'red'}}/>
      <input className="journal-form-input" type="text" name="tag"/>
      <textarea className="journal-form-input" name="text" style={{borderColor: validState.text ? '#fff' : 'red'}}></textarea>
      <Button text="Сохранить"/>
    </form>
  );
}

export default JournalForm;