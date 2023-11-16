const {
  assertNonEmptyString,
} = require('../../functions');

const contactFormAssert = ({
  body: {
    email = '',
    firstName = '',
    lastName = '',
    message = '',
  } = {},
} = {}) => {
  assertNonEmptyString(email, 'email');
  assertNonEmptyString(firstName, 'firstName');
  assertNonEmptyString(lastName, 'lastName');
  assertNonEmptyString(message, 'message');
};

exports.default = contactFormAssert;
