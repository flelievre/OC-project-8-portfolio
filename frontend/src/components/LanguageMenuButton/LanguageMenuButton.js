/* eslint-disable */
/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';

/* [+] MaterialUI imports */
import {
  MenuItem,
  Menu,
  Tooltip,
  IconButton,
} from '@mui/material';
import {
  Icon,
} from '@iconify/react';

import useLanguageMenuButton from './LanguageMenuButton.logic/useLanguageMenuButton';

const LanguageMenuButton = () => {
  const {
    currentLanguage,
    APP_SUPPORTED_LANGUAGES,
    anchorEl,
    handleClick,
    handleClose,
    languageButtonClick,
    getLanguageUrl,
    t,
  } = useLanguageMenuButton();

  return (
    <>
      <Tooltip
        title={t('Language selection')}
        aria-haspopup="true"
      >
        <IconButton
          aria-controls="language-menu"
          onClick={handleClick}
        >
          <Icon icon={APP_SUPPORTED_LANGUAGES.filter(({ lang }) => lang === currentLanguage)[0].icon} />
        </IconButton>
      </Tooltip>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {APP_SUPPORTED_LANGUAGES.map(({ lang, icon }) => {
          return (
            <MenuItem
              component={ReactRouterLink}
              to={getLanguageUrl(lang)}
              onClick={() => languageButtonClick(lang)}
              key={lang}
              selected={lang === currentLanguage}
            >
              <Icon
                icon={icon}
                style={{
                  marginRight: '10px',
                }}
              />
              {t(lang)}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default LanguageMenuButton;
