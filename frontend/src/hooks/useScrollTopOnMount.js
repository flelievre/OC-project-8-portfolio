import {
  useEffect,
} from 'react';
import {
  scrollToPageTop,
} from '../functions'; 

const useScrollTopOnMount = () => {
  useEffect(() => {
    scrollToPageTop();
  }, []);
};

export default useScrollTopOnMount;
