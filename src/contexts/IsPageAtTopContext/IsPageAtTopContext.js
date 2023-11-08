/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  createContext,
} from 'react';

const DEFAULT_VALUE = {
  isPageAtTop: true,
  refresh: () => {},
  scrollToComponentTop: () => {},
  refComponent: null,
};

const IsPageAtTopContext = createContext({
  ...DEFAULT_VALUE,
});

export default IsPageAtTopContext;
