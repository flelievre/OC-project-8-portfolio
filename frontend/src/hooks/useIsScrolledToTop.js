import {
  useState,
  useEffect,
} from 'react';
import useCounter from './useCounter';

const useIsScrolledToTop = ({
  treshold = 50,
  refComponent = null,
}) => {
  const [isPageAtTop, setIsPageAtTop] = useState(true);
  const {
    counter: counterRefreshedOnMounts,
    incrementCounter: refresh,
    counterIsNotNull: isComponentMounted,
  } = useCounter();

  useEffect(() => {
    let removeListener = () => {};

    if (isComponentMounted) {
      const composantElement = refComponent.current || window;

      if (composantElement && composantElement.pageYOffset > treshold) {
        setIsPageAtTop(false);
      } else {
        setIsPageAtTop(true);
      }

      const handleScroll = () => {
        const composantEl = refComponent.current || window;

        if (composantElement && composantEl.pageYOffset > treshold) {
          setIsPageAtTop(false);
        } else {
          setIsPageAtTop(true);
        }
      };

      if (composantElement) {
        composantElement.addEventListener('scroll', handleScroll);
      }

      removeListener = () => {
        if (composantElement) {
          composantElement.removeEventListener('scroll', handleScroll);
        }
      };
    }

    return removeListener;
  }, [counterRefreshedOnMounts, isComponentMounted, treshold, refComponent]);

  const scrollToComponentTop = () => {
    if (refComponent?.current) {
      refComponent.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return {
    isPageAtTop,
    refresh,
    scrollToComponentTop,
  };
};

export default useIsScrolledToTop;
