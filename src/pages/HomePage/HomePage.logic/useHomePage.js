import {
  useEffect,
  useContext,
  useState,
} from 'react';
import WebAppContext from '../../../contexts/WebAppContext/WebAppContext'

const useHomePage = () => {
  const {
    t,
    currentLanguage,
    theme,
    contactRouteUrl = '',
  } = useContext(WebAppContext);

  // const {
  //   setPageTitle = (s) => s,
  // } = useContext(IsPageAtTopContext) || {};

  // useEffect(() => {
  //   setPageTitle(name);
  // }, [name])

  return {
    t,
    currentLanguage,
    theme,
    contactRouteUrl,
  };
};

export default useHomePage;
