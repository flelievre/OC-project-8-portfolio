import {
  matchPath,
} from 'react-router-dom';
import removeLastSlashFormUrl from './removeLastSlashFormUrl';

const getActiveRouteInfos = ({
  routes = [],
  currentRoute = '',
  currentLanguage = '',
  url = '',
  supportedLanguagesCodes = [],
}) => {
  const routesOfLanguage = routes[currentLanguage];

  const activeRoute = routesOfLanguage.find((route) =>
    matchPath(route.path, currentRoute)
  ) || {};

  const activeRouteIndex = routesOfLanguage.findIndex((route) => (
    matchPath(route.path, currentRoute)
  ));

  const contactRoute = routesOfLanguage.find(({ isContactRoute = false }) =>
    isContactRoute
  ) || {};

  const menuRoute = routesOfLanguage.find(({ isMenuRoute = false }) =>
    isMenuRoute
  ) || {};

  const reservationRoute = routesOfLanguage.find(({ isReservationRoute = false }) =>
    isReservationRoute
  ) || {};

  const {
    path: contactRoutePath = '',
  } = contactRoute || {};

  const {
    path: menuRoutePath = '',
  } = menuRoute || {};

  const {
    path: reservationRoutePath = '',
  } = reservationRoute || {};

  const {
    path = '',
  } = activeRoute || {};

  const isRouteErrorRoute = (path === '*');

  const cleanedUrl = removeLastSlashFormUrl(url);

  const fullUrl = `${cleanedUrl}${currentRoute}`;

  const currentMenuRoutePath = menuRoutePath.replace(/:lang/, currentLanguage);
  
  const menuUrl = `${cleanedUrl}${currentMenuRoutePath}`;
  const reservationUrl = `${cleanedUrl}${reservationRoutePath.replace(/:lang/, currentLanguage)}`;

  const isShowingMenu = (currentRoute === currentMenuRoutePath)
    || (currentRoute === `/${currentLanguage}/`);

  const alternateLangLinksData = isRouteErrorRoute
    ? []
    : (
      supportedLanguagesCodes
        .map((lang) => ({
          hrefLang: lang,
          href: `${cleanedUrl}${routes[lang][activeRouteIndex].path.replace(/:lang/, lang)}`,
        }))
    );

  return {
    isRouteErrorRoute,
    activeRoute,
    activeRouteIndex,
    alternateLangLinksData,
    cleanedUrl,
    fullUrl,
    routesOfLanguage,
    contactRoutePath,
    menuUrl,
    reservationUrl,
    isShowingMenu,
  };
};

export default getActiveRouteInfos;
