const generateInputsErrorsTexts = ({
  isShowingErrors = false,
  t = (s) => s,
  inputsErrorsTexts = {},
  areFormInputsInvalid = () => ({}),
  ...formInputs
}) => {
  const validators = areFormInputsInvalid({
    ...formInputs,
  });

  const inputsErrorsHelpers = {};

  Object.keys(
    validators,
  ).forEach((input) => {
    inputsErrorsHelpers[input] = (
      (Object.keys(validators).length > 0)
      && !!validators[input]
      && validators[input]
      && isShowingErrors
    )
      ? t(inputsErrorsTexts[input] || '')
      : '';
  });

  const hasAnError = Object.keys(inputsErrorsHelpers)
    .map((key) => (
      !!inputsErrorsHelpers[key]
    )).reduce((acc, bool) => (
      acc || bool
    ), false);

  return {
    hasAnError,
    ...inputsErrorsHelpers,
  };
};

export default generateInputsErrorsTexts;
