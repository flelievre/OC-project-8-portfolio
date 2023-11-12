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
  } = useContext(WebAppContext) || {};

  return {
    t,
    routesOfLanguage,
    generateAppRoute,
    redirectAppTo,
  };
};

export default useFooter;
