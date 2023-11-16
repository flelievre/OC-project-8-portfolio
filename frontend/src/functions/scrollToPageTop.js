const scrollToPageTop = (top = 0) => {
  if (
    (typeof document !== 'undefined')
    && (document.getElementById('top-container'))
  ) {
    try {
      document.getElementById('top-container').scrollIntoView({
        top,
        left: 0,
        behavior: 'smooth',
      });
    } catch (e) {
      // just a fallback for older browsers
      document.getElementById('top-container').scrollIntoView({
        top,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
};

export default scrollToPageTop;
