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
    isAppLoading,
    // handleFormSubmission,
    t,
  } = useContext(WebAppContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const setMessageSentStatus = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
    setIsSent(true);
  };

  const {
    counterIsNotNull: shouldShowErrors,
    incrementCounter: incrementNbFormSubmissionCounter,
    counter: nbFormSubmissionCounter,
  } = useCounter();

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
        const response = await fetch('https://backend.komdab.net/dispatchNotifications', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            useCase: 'alertingSendSlackNotification',
            useCaseInputs: {
              text: `🌍🏡${name} 🗣${message}   | 👨‍🎨${firstName} ${lastName} 💌${email} ☎️${phoneNumber}`,
              avoidSpamKey: 'komdab-kit-press-downloaded',
            },
          }),
        });
        setMessageSentStatus();
      } catch (e) {
        console.error(e);
      }
    }
  };

  return {
    t,
    isAppLoading,
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
  };
};

export default useContactPagePageLogic;
