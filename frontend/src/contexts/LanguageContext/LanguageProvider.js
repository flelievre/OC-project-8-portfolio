/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React, {
  Fragment,
} from 'react';
// import {
//   Helmet,
// } from 'react-helmet-async';

/* [+] LanguageContext context import */
import LanguageContext from './LanguageContext';

/* [+] LanguageContext logic imports */
import useLanguageContextLogic from './LanguageContext.logic/useLanguageContextLogic';

// const protocol = window.location.protocol;
// const host = window.location.host;
const protocol = '';
const host = '';
const URL = `${protocol}//${host}`;

const LanguageProvider = ({
  children = <></>,
  language = 'fr',
}) => {
  const {
    APP_SUPPORTED_LANGUAGES,
    ...logic
  } = useLanguageContextLogic(language);

  const valuesToProvide = {
    APP_SUPPORTED_LANGUAGES,
    ...logic,
  };

  return (
    <LanguageContext.Provider value={{ ...valuesToProvide }}>
      {/*<Helmet>
        {APP_SUPPORTED_LANGUAGES.map((locale) => (
          <link
            rel="alternate"
            href={`${URL}/${locale}`}
            hrefLang={locale}
            key={locale}
          />
        ))}
      </Helmet>*/}
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
