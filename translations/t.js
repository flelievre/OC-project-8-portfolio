const translateWithParams = (translatedString, params) => {
  let translatedStringWithParam = translatedString;
  Object.keys(params).forEach((param) => {
    translatedStringWithParam = translatedStringWithParam.replace(`{${param}}`, params[param] ? params[param] : '');
  })
  return translatedStringWithParam;
};

const t = ({
  s = '',
  params = {},
  currentLanguage = 'fr',
  supportedLanguages = [],
}) => {
  const translations = supportedLanguages.filter(({ lang }) => lang === currentLanguage);
  return (
    (translations.length > 0)
    && translations[0]
    && translations[0].translations
    && translations[0].translations[s]
  )
    ? translateWithParams(translations[0].translations[s], params)
    : s;
};

export default t;
