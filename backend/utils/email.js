const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider', // e.g., 'Gmail'
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

module.exports = transporter;
