import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles['header']}>
      <img className={styles['logo']} src="/logo.svg" alt="лого" />
      <select className={styles['select']}>
        <option>Поездки</option>
        <option>Учеба</option>
        <option>Работа</option>
      </select>
    </header>
  );
}

export default Header;