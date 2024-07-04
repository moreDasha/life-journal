import TypeSelect from '../SelectType/SelectType';
import styles from './Header.module.css';
import cn from 'classnames';

function Header({ navOpen, setNavOpen }) {
  return (
    <header className={cn(styles['header'], {[styles['fixed']]: navOpen})}>
      <img className={styles['logo']} src="img/logo.svg" alt="лого" />
      <div className={styles['header-activity']}>
        <TypeSelect/>
        <button className={styles['nav-open-button']} onClick={() => setNavOpen(!navOpen)}>
          <img src="img/menu.svg"/>
        </button>
      </div>
    </header>
  );
}

export default Header;