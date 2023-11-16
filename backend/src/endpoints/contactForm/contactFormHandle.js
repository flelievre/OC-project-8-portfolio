const contactFormAssert = require('./contactFormAssert').default;
const contactFormVerify = require('./contactFormVerify').default;
const contactFormDbRequests = require('./contactFormDbRequests').default;
const contactFormExecute = require('./contactFormExecute').default;

const contactFormHandle = async (req, res) => {
  try {
    const {
      body,
    } = req;

    contactFormAssert({
      body,
    });

    const dbResults = await contactFormDbRequests({
      body,
    });

    await contactFormVerify({
      dbResults,
      body,
    });

    const {
      responseToClient,
    } = await contactFormExecute({
      dbResults,
      body,
    });

    res.status(200).send(responseToClient);
  } catch (e) {
    const {
      message = '',
      response: {
        data = {},
      } = {},
    } = e || {};
    
    console.error(e);
    console.error(`[-] ${message}`);

    res.status(400).send({
      success: false,
      message,
      responseData: data,
    });
  }
};

exports.default = contactFormHandle;
