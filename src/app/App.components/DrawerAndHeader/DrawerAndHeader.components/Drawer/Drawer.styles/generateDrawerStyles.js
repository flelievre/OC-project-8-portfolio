const generateAuthDrawerStyles = () => ({
  titleStyle: {
    flexGrow: 1,
  },
  toolbarStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // keep right padding when drawer closed
  },
});

export default generateAuthDrawerStyles;
