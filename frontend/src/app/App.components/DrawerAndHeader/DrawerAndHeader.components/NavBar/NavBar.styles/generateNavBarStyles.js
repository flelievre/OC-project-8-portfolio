const generateNavBarStyles = () => ({
  navBarLogoLargeBoxSx: {
    flexGrow: 1,
  },
  toolbarSx: {
    paddingLeft: '10px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // keep right padding when drawer closed
  },
});

export default generateNavBarStyles;
