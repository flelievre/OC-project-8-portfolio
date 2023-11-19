/*
  Created by François LELIEVRE ©
*/

/* [+] Community imports */
import {
  useContext,
  useState,
} from 'react';

/* [+] Paradise-JS imports */
import {
  generateInputsErrorsTexts,
  isFormInvalid,
} from '../../../functions';

/* [+] Paradise React imports */
import {
  useCounter
} from '../../../hooks';

/* [+] Paradise React imports */
import {
  WebAppContext,
} from '../../../contexts';

/* [+] ContactPagePage constants imports */
import CONTACT_PAGE_INPUTS_ERRORS_TEXTS from '../ContactPage.constants/CONTACT_PAGE_INPUTS_ERRORS_TEXTS';

/* [+] ContactPagePage functions imports */
// import handleContactPage from '../ContactPagePage.functions/handleContactPage';
import areContactPageFormInputsInvalid from '../ContactPage.functions/areContactPageFormInputsInvalid';

const useContactPagePageLogic = () => {
  const {
    // handleFormSubmission,
    t,
  } = useContext(WebAppContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    counterIsNotNull: shouldShowErrors,
    incrementCounter: incrementNbFormSubmissionCounter,
    counter: nbFormSubmissionCounter,
    resetCounter,
  } = useCounter();

  const setMessageSentStatus = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setIsSent(true);
    resetCounter();
  };

  const {
    firstName: firstNameErrorHelper,
    lastName: lastNameErrorHelper,
    email: emailErrorHelper,
    message: messageErrorHelper,
    hasAnError,
  } = generateInputsErrorsTexts({
    areFormInputsInvalid: areContactPageFormInputsInvalid,
    inputsErrorsTexts: CONTACT_PAGE_INPUTS_ERRORS_TEXTS,
    firstName,
    lastName,
    email,
    message,
    isShowingErrors: shouldShowErrors,
    t,
  });

  const handleContactPageForm = async (
    e,
  ) => {
    e.preventDefault();
    if (
      isFormInvalid({
        areFormInputsInvalid: areContactPageFormInputsInvalid,
        email,
        message,
        firstName,
        lastName,
      })
    ) {
      incrementNbFormSubmissionCounter();
    } else if (!isSent) {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            message,
            firstName,
            lastName,
            phoneNumber,
          }),
        });
        setMessageSentStatus();
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    }
  };

  return {
    t,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    message,
    setMessage,
    phoneNumber,
    setPhoneNumber,
    handleContactPageForm,
    firstNameErrorHelper,
    lastNameErrorHelper,
    emailErrorHelper,
    messageErrorHelper,
    hasAnError,
    nbFormSubmissionCounter,
    isSent,
    isLoading,
    setIsLoading,
  };
};

export default useContactPagePageLogic;
