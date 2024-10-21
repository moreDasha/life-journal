import TypeSelect from '../SelectType/SelectType';
import styles from './Header.module.css';
import cn from 'classnames';

function Header({ navOpen, setNavOpen }) {
  return (
    <header className={cn(styles['header'], { [styles['fixed']]: navOpen })}>
      <div className={styles['logo']}></div>
      <div className={styles['header-activity']}>
        <TypeSelect />
        <button
          className={styles['nav-open-button']}
          onClick={() => setNavOpen(!navOpen)}
        >
        </button>
      </div>
    </header>
  );
}

export default Header;
