/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';

/* [+] MaterialUI imports */
import {
  Toolbar,
  LinearProgress,
  Box,
  AppBar,
} from '@mui/material';
// import {
//   // grey,
// } from '@mui/material/colors';
import {
  LanguageMenuButton,
  ThemeSwitcherButton,
} from '../../../../../components';

/* [+] NavBar Styles */
import generateNavBarStyles from './NavBar.styles/generateNavBarStyles';

/* [+] NavBar logic */
import useNavBar from './NavBar.logic/useNavBar';

/* [+] NavBar components */
import NavBarDrawerButton from './NavBar.components/NavBarDrawerButton';
import NavBarOrderBookButton from './NavBar.components/NavBarOrderBookButton/NavBarOrderBookButton';
import PageResponsiveTitle from './NavBar.components/PageResponsiveTitle/PageResponsiveTitle';

import routes from '../../../../../../routes';

const NavBar = ({
  isDrawerOpen = true,
  toggleDrawer = () => {},
} = {}) => {
  const {
    toolbarSx,
    navBarLogoLargeBoxSx,
  } = generateNavBarStyles();

  const {
    t,
    isAppLoading,
    isPageAtTop,
    isInDarkTheme,
    redirectAppTo,
  } = useNavBar();

  return (
    <AppBar
      position="fixed"
      open={isDrawerOpen}
      color={isPageAtTop ? 'transparent' : 'default'}
      elevation={isPageAtTop ? 0 : 1}
    >
      <Toolbar
        sx={toolbarSx}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-francois.png.webp?alt=media&token=de922cab-7eba-4e72-8482-3c3f2cc246e9"
          alt="François logo"
          style={{
            width: 175,
            cursor: 'pointer',
          }}
          onClick={() => redirectAppTo({ route: '' })}
        />

        <PageResponsiveTitle />

        <LanguageMenuButton />

        <ThemeSwitcherButton
          t={t}
          isPageAtTop={isPageAtTop}
        />

        {!isDrawerOpen && (
          <NavBarDrawerButton
            toggleDrawer={toggleDrawer}
            isPageAtTop={isPageAtTop}
            isInDarkTheme={isInDarkTheme}
          />
        )}

      </Toolbar>
      {isAppLoading && !isPageAtTop && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </AppBar>
  );
};

export default NavBar;
