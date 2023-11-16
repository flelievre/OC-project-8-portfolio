import {
  useContext,
} from 'react';
import {
  useLocation,
} from 'react-router-dom';
import {
  WebAppContext,
} from '../../../contexts';

const useErrorPage = () => {
  const {
    pathname = '',
  } = useLocation() || {};

  const {
    generateAppRoute,
    t,
  } = useContext(WebAppContext);

  return {
    pathname,
    generateAppRoute,
    t,
  };
};

export default useErrorPage;
