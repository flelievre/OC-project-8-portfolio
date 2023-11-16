/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React, {
  useContext,
} from 'react';

/* [+] MaterialUI imports */
import {
  Tooltip,
  IconButton,
} from '@mui/material';
import {
  Icon,
} from '@iconify/react';
import {
  ThemeContext,
} from '../../contexts';

const ThemeSwitcherButton = ({
  t = (s) => s,
  isPageAtTop = false,
}) => {
  const {
    switchDarkOrLightTheme,
    themeName,
  } = useContext(ThemeContext);

  return (
    <Tooltip title={t('Theme selection')}>
      <IconButton
        onClick={switchDarkOrLightTheme}
        sx={{ color: (isPageAtTop || themeName === 'dark')  ? 'white.main' : 'primary.main' }}
      >
        {(themeName === 'light')
          ? <Icon icon="fluent-mdl2:brightness" />
          : <Icon icon="ic:round-brightness-2" />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeSwitcherButton;
