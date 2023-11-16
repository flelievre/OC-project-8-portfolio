import {
  useEffect,
  useContext,
  useState,
} from 'react';
import WebAppContext from '../../../contexts/WebAppContext/WebAppContext';

const useHomePage = () => {
  const {
    t,
    currentLanguage,
    theme,
    contactRouteUrl = '',
    generateAppRoute,
  } = useContext(WebAppContext);

  return {
    t,
    currentLanguage,
    theme,
    contactRouteUrl,
    generateAppRoute,
  };
};

export default useHomePage;
