/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
} from 'react';
import {
  useLocation,
} from 'react-router-dom';

/* [+] Global context imports */
import {
  WebAppContext,
  // IsPageAtTopContext,
} from '../../../../../../contexts';
import routes from '../../../../../../../routes';

/* [+] UnauthDrawer Styles */
import generateDrawerStyles from '../Drawer.styles/generateDrawerStyles';

const useDrawer = () => {
  const {
    pathname = '',
    ...rest
  } = useLocation();

  const {
    redirectAppTo,
    generateAppRoute,
    isMobile,
    t,
    currentLanguage,
  } = useContext(WebAppContext);

  // const {
  //   isPageAtTop,
  // } = useContext(IsPageAtTopContext);

  const {
    toolbarStyle,
    titleStyle,
  } = generateDrawerStyles();

  // const {
  //   REACT_APP_NAME: appName = '',
  //   REACT_APP_URL: appUrl = '',
  // } = process.env || {};

  const appUrl = '';
  const appName = '';

  const drawerRoutes = routes[currentLanguage]
    .filter(({ showInDrawer = false }) => showInDrawer)
    .map(({ path, ...rest }) => ({
      path,
      formattedRoute: generateAppRoute({ route: path.replace(/\/:lang\//, '') }),
      ...rest,
    }));

  const isRouteSelected = (formattedRoute) => (
    pathname === formattedRoute
  );

  // const showLoadingBar = isPageAtTop && isAppLoading;

  return {
    t,
    appName,
    appUrl,
    isMobile,
    generateAppRoute,
    redirectAppTo,
    toolbarStyle,
    titleStyle,
    isRouteSelected,
    drawerRoutes,
  };
};

export default useDrawer;
