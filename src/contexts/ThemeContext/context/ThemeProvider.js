import React, {
  useState,
  useEffect,
} from 'react';
// import createPersistedState from 'use-persisted-state';
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from '@mui/material/styles';
import Cookies from 'js-cookie';
// import { unstable_createMuiStrictModeTheme as createTheme } from '@mui/material';
import ThemeContext from './ThemeContext';
import themesByNames from '../themes/themesByNames';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import createCommonComponentsTheme from '../themes/createCommonComponentsTheme';

// const useThemeState = createPersistedState('theme');

const MyThemeProvider = ({
  initialTheme = 'light',
  children = <></>,
}) => {
  const [themeName, setThemeName] = useState(initialTheme);
  const initalMuiTheme = (initialTheme === 'light')
    ? { ...lightTheme }
    : { ...darkTheme };
  const muiTheme = createTheme({ ...initalMuiTheme });
  const themeWithCommonComponentsTheme = createTheme(
    muiTheme,
    {
      ...createCommonComponentsTheme(muiTheme),
    },
  );
  const responsiveMuiTheme = responsiveFontSizes(themeWithCommonComponentsTheme);
  const [theme, setTheme] = useState({ ...responsiveMuiTheme });

  useEffect(() => {
    const newTheme = (themeName === 'light')
      ? { ...lightTheme }
      : { ...darkTheme };
    const muiNewTheme = createTheme({ ...newTheme });
    const newThemeWithCommonComponentsTheme = createTheme(
      muiNewTheme,
      {
        ...createCommonComponentsTheme(muiNewTheme),
      },
    );
    const responsiveMuiNewTheme = responsiveFontSizes(newThemeWithCommonComponentsTheme);
    setTheme(responsiveMuiNewTheme);
    Cookies.set('userTheme', themeName);
  }, [themeName]);

  const switchDarkOrLightTheme = () => {
    if (themeName === 'dark') {
      setThemeName('light');
    } else {
      setThemeName('dark');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeName,
        setThemeName,
        switchDarkOrLightTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
