import styles from './JournalForm.module.css';
import cn from 'classnames';
import Button from '../Button/Button';
import InputName from '../InputName/InputName';
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

    if (!formProps.title?.trim().length) {
      setValidState((state) => ({...state, title: false}));
    } else {
      setValidState((state) => ({...state, title: true}));
    }
    if (!formProps.date) {
      setValidState((state) => ({...state, date: false}));
    } else {
      setValidState((state) => ({...state, date: true}));
    }
    if (!formProps.text?.trim().length) {
      setValidState((state) => ({...state, text: false}));
    } else {
      setValidState((state) => ({...state, text: true}));
    }

    if (formProps.title?.trim().length && formProps.date && formProps.text?.trim().length) {
      onSubmit(formProps);
    } else {
      return;
    }
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <input className={cn(styles['journal-form-input'], styles['input-title'], {[styles['invalid']]: !validState.title})} type="text" name="title" placeholder="Добавьте заголовок"/>
      <div className={styles['input-wrap']}>
        <div className={styles['input-small-wrap']}>
          <InputName src="/calendar.png" name="Дата"/>
          <input className={cn(styles['journal-form-input'], styles['input-small'], {[styles['invalid']]: !validState.date})} type="date" name="date"/>
        </div>
        <div className={styles['input-small-wrap']}>
          <InputName src="/folder.png" name="Теги"/>
          <input className={cn(styles['journal-form-input'], styles['input-small'])} type="text" name="tag" placeholder="Добавьте теги"/>
        </div>
      </div>
      <textarea className={cn(styles['journal-form-input'], {[styles['invalid']]: !validState.text})} name="text" rows="10" placeholder="Добавьте описание"></textarea>
      <Button text="Сохранить"/>
    </form>
  );
}

export default JournalForm;