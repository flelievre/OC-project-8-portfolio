/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
} from 'react';

import {
  IsPageAtTopContext,
  WebAppContext,
} from '../../../../../../../../contexts';

const useNavBarOrderBookButton = () => {
  const {
    isPageAtTop,
  } = useContext(IsPageAtTopContext);

  const {
    t,
  } = useContext(WebAppContext);

  return {
    isPageAtTop,
    t,
  };
};

export default useNavBarOrderBookButton;
