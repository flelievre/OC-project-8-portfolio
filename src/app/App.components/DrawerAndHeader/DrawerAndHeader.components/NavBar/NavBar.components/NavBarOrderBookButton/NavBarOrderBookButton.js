/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';

/* [+] MaterialUI imports */
import {
  Button,
  Paper,
} from '@mui/material';
import {
  Icon,
} from '@iconify/react';
import useNavBarOrderBookButton from './NavBarOrderBookButton.logic/useNavBarOrderBookButton';

const NavBarOrderBookButton = () => {
  const {
    t,
    linkWebsiteWhitelabelOrder,
    linkWebsiteWhitelabelBooking,
    isPageAtTop,
  } = useNavBarOrderBookButton();

  return !isPageAtTop && (linkWebsiteWhitelabelOrder || linkWebsiteWhitelabelBooking) && (
    <Paper elevation={1} className="action-buttons">
      {linkWebsiteWhitelabelBooking && (
        <a
          href={linkWebsiteWhitelabelBooking}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="medium"
            className="w-45vwm mlr-20d"
            startIcon={<Icon icon="solar:calendar-add-bold" />}
          >
            {t('Book')}
          </Button>
        </a>
      )}
      {linkWebsiteWhitelabelOrder && (
        <a
          href={linkWebsiteWhitelabelOrder}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="medium"
            className={linkWebsiteWhitelabelBooking ? 'w-45vwm' : 'w-90vwm'}
            startIcon={<Icon icon="fluent:shopping-bag-24-filled" />}
          >
            {t('Order')}
          </Button>
        </a>
      )}
    </Paper>
  );
};

export default NavBarOrderBookButton;
