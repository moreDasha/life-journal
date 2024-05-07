import styles from './InputName.module.css';

function InputName ({ src, name }) {
  return(
    <div className={styles['input-small-name']}>
      <img className={styles['input-small-icon']} src={src} alt="" />
      <span>{name}</span>
    </div>
  );
}

export default InputName;