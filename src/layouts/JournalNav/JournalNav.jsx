import styles from './JournalNav.module.css';
import cn from 'classnames';

function JournalNav({ children, navOpen }) {
  return (
    <nav className={cn(styles['journal-nav'], {[styles['open']]: navOpen})}>
      {children}
    </nav>
  );
}

export default JournalNav;