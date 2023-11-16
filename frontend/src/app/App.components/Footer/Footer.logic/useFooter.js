import {
  useContext,
} from 'react';
import {
  WebAppContext,
} from '../../../../contexts';

const useFooter = () => {
  const {
    t = (s) => s,
    routesOfLanguage = [],
    generateAppRoute = () => {},
    redirectAppTo,
    contactRouteUrl = '',
  } = useContext(WebAppContext) || {};

  return {
    t,
    routesOfLanguage,
    generateAppRoute,
    redirectAppTo,
    contactRouteUrl,
  };
};

export default useFooter;
