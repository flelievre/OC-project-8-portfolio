/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import React, {
  Fragment,
} from 'react';

/* [+] IsPageAtTopContext context import */
import IsPageAtTopContext from './IsPageAtTopContext';

/* [+] IsPageAtTopContext logic imports */
import useIsPageAtTopContextLogic from './IsPageAtTopContext.logic/useIsPageAtTopContextLogic';

const IsPageAtTopProvider = ({
  children = <></>,
}) => {
  const {
    ...logic
  } = useIsPageAtTopContextLogic();

  const valuesToProvide = {
    ...logic,
  };

  return (
    <IsPageAtTopContext.Provider
      value={
        {
          ...valuesToProvide,
        }
      }
    >
      {children}
    </IsPageAtTopContext.Provider>
  );
};

export default IsPageAtTopProvider;
