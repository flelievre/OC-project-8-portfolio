const {
  sendMailSendgrid,
} = require('../../functions');

const contactFormExecute = async ({
  body: {
    email = '',
    firstName = '',
    lastName = '',
    message = '',
    phoneNumber = '',
  } = {},
} = {}) => {
  await sendMailSendgrid({
    toEmail: email,
    toName: `${firstName} ${lastName}`,
    subject: `Demande de contact correctment reçue`,
    htmlBody: `Bonjour,<br /><br />Votre demande de contact a bien été reçue.<br /><br />Je reviendrai vers vous dans les plus brefs délais.<br /><br />François`,
  });

  await sendMailSendgrid({
    toEmail: 'lel.francois@gmail.com',
    toName: 'Francois LELIEVRE',
    subject: `Portfolio | Nouvelle demande de contact`,
    htmlBody: `${firstName}<br /><br />${lastName}<br /><br />${email}<br /><br />${phoneNumber}<br /><br />${message}`,
  });

  const responseToClient = {};

  return ({
    responseToClient,
  });
};

exports.default = contactFormExecute;
