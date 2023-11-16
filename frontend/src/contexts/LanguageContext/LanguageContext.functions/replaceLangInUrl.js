const replaceLangInUrl = (newLanguage) => {
  const newWindow = (typeof window === 'undefined')
    ? {}
    : window;
  const {
    location: {
      pathname = '',
    } = {},
  } = newWindow || {};
  const [,, ...route] = pathname.split('/');
  return (route.length > 0)
    ? ([newLanguage, ...route].join('/'))
    : `${newLanguage}/`;
};

export default replaceLangInUrl;
