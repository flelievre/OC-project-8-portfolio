import React from 'react';
import useDrawerAndHeader from './DrawerAndHeader.logic/useDrawerAndHeader';
import NavBar from './DrawerAndHeader.components/NavBar/NavBar';
import Drawer from './DrawerAndHeader.components/Drawer/Drawer';

const DrawerAndHeader = () => {
  const {
    toggleDrawer,
    isDrawerOpen,
    hideDrawer,
  } = useDrawerAndHeader();

  return (
    <>
      <Drawer
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        hideDrawer={hideDrawer}
      />
      <NavBar
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
};

export default DrawerAndHeader;
