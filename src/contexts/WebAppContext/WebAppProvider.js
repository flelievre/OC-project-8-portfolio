/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React from 'react';

/* [+] WebAppContext context import */
import WebAppContext from './WebAppContext';

/* [+] WebAppContext logic imports */
import useWebAppContextLogic from './WebAppContext.logic/useWebAppContextLogic';

const WebAppProvider = ({
  children = <></>,
  theme,
  themeName,
  setThemeName,
  switchDarkOrLightTheme,
  serverUrl = '',
}) => {
  const {
    ...logic
  } = useWebAppContextLogic({
    theme,
    themeName,
    setThemeName,
    switchDarkOrLightTheme,
    serverUrl,
  });

  const valuesToProvide = {
    ...logic,
    themeName,
    theme,
  };

  return (
    <WebAppContext.Provider
      value={
        {
          ...valuesToProvide,
        }
      }
    >
      {children}
    </WebAppContext.Provider>
  );
};

export default WebAppProvider;
