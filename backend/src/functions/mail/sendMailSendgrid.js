const {
  SENDGRID_API_KEY,
} = process.env
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(SENDGRID_API_KEY)

const sendMailSendgrid = ({
  fromEmail = 'francois.lelievre@komdab.net',
  fromName = 'François - Développeur Web',
  toEmail,
  toName,
  subject,
  textBody = 'Veuillez activer HTML pour visualiser ce courrier',
  htmlBody,
  bccEmails = [],
  ccEmails = [],
} = {}) => sgMail
  .send({
    personalizations: [
      {
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
      },
    ],
    from: {
      email: fromEmail,
      name: fromName,
    },
    subject,
    text: textBody,
    html: htmlBody,
  })

exports.default = sendMailSendgrid
