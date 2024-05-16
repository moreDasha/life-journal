import styles from './JournalForm.module.css';
import cn from 'classnames';
import { initialState, formReducer } from './JournalFormState';
import Button from '../Button/Button';
import InputName from '../InputName/InputName';
import { useEffect, useReducer, useRef } from 'react';

function JournalForm ({ onSubmit }) {

  const [formState, dispatchForm] = useReducer(formReducer, initialState);
  const { isValid, values, isReadyToSubmit } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();

  const focusOnError = (isValid) => {
    switch(true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  // устанавливаем невалидность полей
  useEffect(() => {
    let timerId;
    if (!isValid.title || !isValid.date || !isValid.text) {
      focusOnError(isValid);
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY'});
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  // отправка формы
  useEffect(() => {
    if (isReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isReadyToSubmit, onSubmit, values]);

  const onChange = (e) => {
    dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value }});
  };

  // проверяем и сохраняем значения полей формы
  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>

      <input className={cn(styles['journal-form-input'], styles['input-title'], {[styles['invalid']]: !isValid.title})} ref={titleRef} type="text" name="title" placeholder="Добавьте заголовок" onChange={onChange} value={values.title}/>

      <div className={styles['input-wrap']}>
        <div className={styles['input-small-wrap']}>
          <InputName src="/calendar.png" name="Дата"/>

          <input className={cn(styles['journal-form-input'], styles['input-small'], {[styles['invalid']]: !isValid.date})} ref={dateRef} type="date" name="date" onChange={onChange} value={values.date}/>

        </div>
        <div className={styles['input-small-wrap']}>
          <InputName src="/folder.png" name="Теги"/>

          <input className={cn(styles['journal-form-input'], styles['input-small'])} type="text" name="tag" placeholder="Добавьте теги" onChange={onChange} value={values.tag}/>

        </div>
      </div>

      <textarea className={cn(styles['journal-form-input'], {[styles['invalid']]: !isValid.text})} ref={textRef} name="text" rows="10" placeholder="Добавьте описание" onChange={onChange} value={values.text}></textarea>

      <Button text="Сохранить"/>
    </form>
  );
}

export default JournalForm;