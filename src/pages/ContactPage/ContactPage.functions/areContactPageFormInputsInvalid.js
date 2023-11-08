import {
  isEmptyString,
  isEmail,
} from '../../../functions';

const areContactPageFormInputsInvalid = ({
  email = '',
  message = '',
  lastName = '',
  firstName = '',
}) => ({
  email: !isEmail(email),
  lastName: isEmptyString(lastName),
  firstName: isEmptyString(firstName),
  message: isEmptyString(message),
});

export default areContactPageFormInputsInvalid;
