/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
  useRef,
  useEffect,
} from 'react';
import {
  useNavigate,
  useLocation,
} from 'react-router-dom';

/* [+] Paradise React Web imports */
import LanguageContext from '../../LanguageContext/LanguageContext';
import routes from '../../../../routes';
import {
  getActiveRouteInfos,
  scrollToPageTop,
} from '../../../functions';

const useWebAppContextLogic = ({
  theme,
  themeName,
  setThemeName,
  switchDarkOrLightTheme,
  serverUrl = '',
}) => {
  const navigate = useNavigate();

  const {
    pathname = '',
  } = useLocation();

  useEffect(() => {
    scrollToPageTop();
  }, [pathname]);

  const {
    t,
    generateRoute,
    currentLanguage,
    ...languageProps
  } = useContext(LanguageContext);

  const redirectAppTo = ({ route = '' }) => navigate(generateRoute(route));

  const generateAppRoute = ({ route = '' }) => generateRoute(route);

  const shouldCSR = useRef(null);

  useEffect(() => {
    shouldCSR.current = true;
  }, []);

  const rawUrl = (typeof window === 'undefined')
    ? ''
    : window.location.href;
  const url = rawUrl
    ? new URL(rawUrl)
    : {
      protocol: '',
      hostname: '',
      port: '',
    };
  const protocol = url.protocol; // Get the protocol (e.g., "http:" or "https:")
  const domain = url.hostname;
  const port = ((url.port !== '80') || (url.port !== '443'))
    ? url.port
    : '';
  const currentUrl = rawUrl
    ? `${protocol}//${domain}${port ? `:${port}` : ''}`
    : '';

  const supportedLanguagesCodes = Object.keys(routes).map((lang) => lang);

  const {
    activeRoute,
    activeRouteIndex,
    alternateLangLinksData,
    isRouteErrorRoute,
    cleanedUrl,
    fullUrl,
    routesOfLanguage,
    contactRoutePath,
    menuUrl,
    reservationUrl,
    isShowingMenu,
  } = getActiveRouteInfos({
    url: currentUrl || serverUrl,
    routes,
    currentRoute: pathname,
    currentLanguage,
    supportedLanguagesCodes,
  });


  const contactRouteUrl = generateAppRoute({ route: contactRoutePath.replace('\/:lang\/', '') });

  const isInDarkTheme = (themeName === 'dark');

  return {
    t,
    redirectAppTo,
    generateAppRoute,
    theme,
    themeName,
    setThemeName,
    switchDarkOrLightTheme,
    shouldCSR,
    currentLanguage,
    activeRoute,
    activeRouteIndex,
    alternateLangLinksData,
    isRouteErrorRoute,
    supportedLanguagesCodes,
    cleanedUrl,
    fullUrl,
    routesOfLanguage,
    isInDarkTheme,
    contactRouteUrl,
    menuUrl,
    reservationUrl,
    isShowingMenu,
    ...languageProps,
  };
};

export default useWebAppContextLogic;
