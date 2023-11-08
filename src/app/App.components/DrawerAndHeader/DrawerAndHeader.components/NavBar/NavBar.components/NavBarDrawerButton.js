/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';

/* [+] MaterialUI imports */
import {
  IconButton,
} from '@mui/material';
import { Icon } from '@iconify/react';

const NavBarDrawerButton = ({
  toggleDrawer = () => {},
  isPageAtTop = false,
  isInDarkTheme = false,
}) => (
  <IconButton
    aria-label="toggle menu"
    onClick={toggleDrawer}
    sx={{
      color: (isPageAtTop || isInDarkTheme)
        ? 'white.main'
        : 'primary.main',
    }}
  >
    <Icon
      icon="ic:baseline-menu"
    />
  </IconButton>
);

export default NavBarDrawerButton;
