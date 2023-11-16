/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
  useRef,
} from 'react';

import {
  IsPageAtTopContext,
  WebAppContext,
} from '../../../../../../../../contexts';

const usePageResponsiveTitle = () => {
  const pageTitleRef = useRef(null);

  const {
    isPageAtTop,
    pageTitle,
    scrollToComponentTop,
  } = useContext(IsPageAtTopContext) || {};

  const {
    isMobile,
  } = useContext(WebAppContext);

  return {
    pageTitleRef,
    scrollToComponentTop,
    isPageAtTop,
    isMobile,
    pageTitle,
  };
};

export default usePageResponsiveTitle;
