/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';
import {
  Link as ReactRouterLink,
} from 'react-router-dom';

/* [+] MaterialUI imports */
import Stack from '@mui/material/Stack';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import grey from '@mui/material/colors/grey';

const DrawerStackedItem = ({
  route = '',
  selected = false,
  onClick = () => {},
  Icon = <></>,
  title = '',
} = {}) => (
  <Tooltip title={title} placement="right">
    <ListItemButton
      sx={{
        borderRadius: 2,
        padding: 0.75,
      }}
      component={ReactRouterLink}
      to={route}
      onClick={onClick}
      selected={selected}
    >
      <Stack spacing={0}>
        <ListItemIcon
          sx={{
            color: selected
              ? 'primary.main'
              : grey[500],
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Icon />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            sx: {
              color: selected
                ? 'primary.main'
                : grey[600],
              fontWeight: selected
                ? 600
                : 500,
              fontSize: 10,
              textAlign: 'center',
              maxWidth: 55,
            },
          }}
          primary={title}
        />
      </Stack>
    </ListItemButton>
  </Tooltip>
);

export default DrawerStackedItem;
