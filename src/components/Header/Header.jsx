import TypeSelect from '../SelectType/SelectType';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles['header']}>
      <img className={styles['logo']} src="/logo.svg" alt="лого" />
      <div>
        <TypeSelect/>
        <img src="/menu.svg"/>
      </div>
    </header>
  );
}

export default Header;