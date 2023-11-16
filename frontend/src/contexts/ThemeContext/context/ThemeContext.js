import { createContext } from 'react';

const ThemeContext = createContext({
  themeName: '',
  setThemeName: () => {},
});

export default ThemeContext;
