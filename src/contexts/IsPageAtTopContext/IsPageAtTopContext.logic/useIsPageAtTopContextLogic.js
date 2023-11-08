/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useRef,
  useState,
} from 'react';

/* [+] Paradise React Web imports */
import useIsScrolledToTop from '../../../hooks/useIsScrolledToTop';

const useIsPageAtTopContextLogic = () => {
  const refTopComponent = useRef(null);

  const [pageTitle, setPageTitle] = useState('');

  const {
    isPageAtTop,
    refresh,
    scrollToComponentTop,
  } = useIsScrolledToTop({
    refComponent: refTopComponent,
  });

  console.log({
    isPageAtTop,
  });

  return {
    scrollToComponentTop,
    pageTitle,
    setPageTitle,
    refresh,
    isPageAtTop,
    refTopComponent,
  };
};

export default useIsPageAtTopContextLogic;
