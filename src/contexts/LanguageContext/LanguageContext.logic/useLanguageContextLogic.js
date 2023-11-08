/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useEffect,
  useState,
} from 'react';
import {
  setLanguage,
  useTranslation,
} from 'react-multi-lang';

/* [+] LanguageContext constants imports */
import APP_SUPPORTED_LANGUAGES from '../LanguageContext.@constants/APP_SUPPORTED_LANGUAGES';

/* [+] LanguageContext functions imports */
import replaceLangInUrl from '../LanguageContext.functions/replaceLangInUrl';

const useLanguageContextLogic = (language = 'fr') => {
  const t = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  useEffect(
    () => {
      setLanguage(currentLanguage);
      document.documentElement.lang = currentLanguage;
      // window.history.replaceState(
      //   null,
      //   `${currentLanguage} state`,
      //   replaceLangInUrl(`/${currentLanguage}`),
      // );
    },
    [currentLanguage],
  );


  const generateRoute = (route) => (
    `/${currentLanguage}/${route}`
  );

  return {
    APP_SUPPORTED_LANGUAGES,
    currentLanguage,
    setCurrentLanguage,
    generateRoute,
    t,
  };
};

export default useLanguageContextLogic;
