import { useContext } from 'react';
import styles from './SelectType.module.css';
import { TypeContext } from '../../context/type.context.jsx';

function TypeSelect() {
  const {typeId, setTypeId} = useContext(TypeContext);

  const changeValue = (e) => {
    setTypeId(Number(e.target.value));
  };

  return (
    <select className={styles['select']} value={typeId} onChange={changeValue} name='type'>
      <option value='1'>Поездки</option>
      <option value='2'>Учеба</option>
      <option value='3'>Работа</option>
      <option value='4'>Выходные</option>
      <option value='5'>Другое</option>
    </select>
  );
}

export default TypeSelect;
