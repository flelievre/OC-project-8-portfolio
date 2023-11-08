/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';

/* [+] MaterialUI imports */
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
  Icon,
} from '@iconify/react';

const DrawerLargeItem = ({
  route = '',
  selected = false,
  onClick = () => {},
  icon = '',
  title = '',
}) => {
  return (
    <ListItemButton
      component={ReactRouterLink}
      to={route}
      onClick={onClick}
      selected={selected}
      sx={{
        color: selected
          ? 'primary.main'
          : '',
        borderRadius: '20px 0 0 20px',
      }}
    >
      {icon && (<Icon icon={icon} width={30} height={30} />)}
      <ListItemText
        primaryTypographyProps={{
          sx: {
            color: selected
              ? 'primary.main'
              : '',
          },
        }}
        primary={title}
      />
    </ListItemButton>
  );
};

export default DrawerLargeItem;
