/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
  useEffect,
} from 'react';

/* [+] paradise-react-web imports */
import {
  WebAppContext,
} from '../../../../contexts';
import {
  useBoolean,
} from '../../../../hooks';

const useDrawerAndHeader = () => {
  const {
    t,
  } = useContext(WebAppContext);

  const {
    value: isDrawerOpen,
    setTrue: showDrawer,
    setFalse: hideDrawer,
    toggleValue: toggleDrawer,
  } = useBoolean();

  return {
    t,
    toggleDrawer,
    isDrawerOpen,
    hideDrawer,
  };
};

export default useDrawerAndHeader;
