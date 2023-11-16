/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
} from 'react';

import {
  WebAppContext,
  IsPageAtTopContext,
} from '../../../../../../contexts';

const useAuthNavBar = () => {
  const {
    t,
    generateAppRoute,
    redirectAppTo,
    isAppLoading,
    isInDarkTheme,
  } = useContext(WebAppContext);

  const {
    isPageAtTop,
  } = useContext(IsPageAtTopContext);

  return {
    t,
    generateAppRoute,
    redirectAppTo,
    isAppLoading,
    isPageAtTop,
    isInDarkTheme,
  };
};

export default useAuthNavBar;
