/* eslint-disable */
/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';

/* [+] MaterialUI imports */
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconEmpty from '@mui/material/Icon';
import { Icon } from '@iconify/react';

/* [+] Drawer logic */
import useDrawer from './Drawer.logic/useDrawer';

/* [+] Drawer components */
import DrawerLargeItem from './Drawer.components/DrawerLargeItem';

const MyDrawer = ({
  isDrawerOpen: open = true,
  toggleDrawer = () => {},
  hideDrawer = () => {},
} = {}) => {
  const {
    t,
    appName,
    appUrl,
    generateAppRoute,
    redirectAppTo,
    toolbarStyle,
    titleStyle,
    isRouteSelected,
    showLoadingBar = false,
    drawerRoutes,
    name,
    thumbnail,
    streetNumber,
    route,
    postalCode,
    city,
    colorPrimary,
  } = useDrawer();
  
  return (
    <Box
      component="aside"
      sx={{
        display: 'flex',
      }}
    >
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          // xs: isMobile ? 'block' : 'none',
          // sm: open ? 'block' : 'none',
          zIndex: open ? 1202 : -1,
        }}
        anchor="right"
        elevation={0}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: [1],
            minWidth: 300,
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/openclassrooms-bucket.appspot.com/o/portfolio-web-developer%2Ftech%2Flogo-francois.png.webp?alt=media&token=de922cab-7eba-4e72-8482-3c3f2cc246e9"
            alt="François logo"
            style={{
              width: 100,
              cursor: 'pointer',
            }}
            onClick={() => redirectAppTo({ route: routes.HOME })}
          />
          <IconButton onClick={hideDrawer} aria-label="back">
            <Icon icon="ic:round-chevron-right" sx={{ color: 'primary.main' }} aria-hidden="true" />
          </IconButton>
        </Toolbar>
        <Divider sx={{ mb: showLoadingBar ? 0 : '4px' }} />
        <Box>
          <List
            component="nav"
            sx={{ pl: '20px' }}
          >
            {drawerRoutes.map(({
              formattedRoute = '',
              selected = false,
              onClick = () => {},
              icon = '',
              label = '',
            }) => (
              <DrawerLargeItem
                key={formattedRoute}
                route={formattedRoute}
                selected={isRouteSelected(formattedRoute)}
                icon={icon}
                title={t(label)}
                onClick={hideDrawer}
              />
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MyDrawer;
