import { useEffect, useState } from 'react';
import styles from './SchemeSwitcher.module.css';
import cn from 'classnames';

function SchemeSwitcher({ device }) {
  const [checkedScheme, setcheckedScheme] = useState(null);

  const getColorScheme = () => {
    const savedScheme = localStorage.getItem('colorScheme');

    if (savedScheme) {
      document.documentElement.setAttribute('data-color-scheme', savedScheme);
      setcheckedScheme(savedScheme);
    } else {
      document.documentElement.setAttribute(
        'data-color-scheme',
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
      setcheckedScheme('auto');
    }
  };

  const selectScheme = (e) => {
    localStorage.setItem('colorScheme', e.target.value);
    document.documentElement.setAttribute('data-color-scheme', e.target.value);
    setcheckedScheme(e.target.value);
  };

  useEffect(() => {
    getColorScheme();
  }, []);

  return (
    <fieldset className={cn(styles['switcher'], styles[`${device}`])}>
      <input
        className={cn(styles['switcher-btn'], {
          [styles['checked']]: 'light' === checkedScheme
        })}
        type="radio"
        name="scheme"
        value="light"
        onChange={selectScheme}
        checked={'light' === checkedScheme}
      />
      <input
        className={cn(styles['switcher-btn'], {
          [styles['checked']]: 'auto' === checkedScheme
        })}
        type="radio"
        name="scheme"
        value="auto"
        onChange={selectScheme}
        checked={'auto' === checkedScheme}
      />
      <input
        className={cn(styles['switcher-btn'], {
          [styles['checked']]: 'dark' === checkedScheme
        })}
        type="radio"
        name="scheme"
        value="dark"
        onChange={selectScheme}
        checked={'dark' === checkedScheme}
      />
      <div className={styles['switcher-selected']}></div>
    </fieldset>
  );
}

export default SchemeSwitcher;
