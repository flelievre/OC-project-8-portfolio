/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
  useState,
} from 'react';
/* [+] Paradise-React-Web imports */
import {
  LanguageContext,
  WebAppContext,
} from '../../../contexts';
import replaceLangInUrl from '../../../contexts/LanguageContext/LanguageContext.functions/replaceLangInUrl';

const useLanguageMenuButton = () => {
  const {
    currentLanguage,
    APP_SUPPORTED_LANGUAGES,
    setCurrentLanguage,
    t,
  } = useContext(LanguageContext);

  const {
    alternateLangLinksData,
  } = useContext(WebAppContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const languageButtonClick = (language) => {
    setCurrentLanguage(language);
    handleClose();
  };

  const getLanguageUrl = (language) => (
    replaceLangInUrl(`/${language}`)
  );

  return {
    currentLanguage,
    APP_SUPPORTED_LANGUAGES,
    anchorEl,
    handleClick,
    handleClose,
    languageButtonClick,
    alternateLangLinksData,
    getLanguageUrl,
    t,
  };
};

export default useLanguageMenuButton;
