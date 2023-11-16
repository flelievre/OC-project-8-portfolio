/*
  Created by François LELIEVRE
*/

/* Community imports */
const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const {
  PORT = 4000,
} = process.env;

/* endpoints imports */
const {
  contactFormHandle,
} = require('./endpoints/contactForm');

const app = express();
app.use(cors());
app.use(helmet());

const server = http.Server(app);

app.post('/contact', bodyParser.json(), contactFormHandle);

server.listen(
  PORT,
  () => console.log(`[+] 🚀 Server listening on port ${PORT}`),
);
