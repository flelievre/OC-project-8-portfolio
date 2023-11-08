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
  } = useContext(WebAppContext) || {};

  return {
    t,
    routesOfLanguage,
    generateAppRoute,
  };
};

export default useFooter;
