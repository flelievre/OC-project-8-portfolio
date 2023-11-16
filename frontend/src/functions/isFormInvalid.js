const isFormInvalid = ({
  areFormInputsInvalid = () => ({}),
  ...formInputs
}) => {
  const areFormInputsInvalidObj = areFormInputsInvalid({
    ...formInputs,
  });
  return (
    Object.keys(
      areFormInputsInvalidObj,
    ).reduce(
      (acc, input) => (acc || (!!areFormInputsInvalidObj[input] && areFormInputsInvalidObj[input])),
      false,
    )
  );
};

export default isFormInvalid;
