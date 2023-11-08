import {
  useState,
} from 'react';

const useBoolean = ({
  defaultValue = false,
  postValueChange = () => {},
} = {}) => {
  const [value, setValue] = useState(defaultValue);

  const setTrue = () => {
    setValue(true);
    postValueChange();
  };

  const setFalse = () => {
    setValue(false);
    postValueChange();
  };

  const toggleValue = () => {
    setValue(!value);
    postValueChange();
  };

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggleValue,
  };
};

export default useBoolean;
