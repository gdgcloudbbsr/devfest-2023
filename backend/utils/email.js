const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "gdgcloudbbsr@gmail.com",
    pass: "qlznoqscjqjbdhqp",
  },
});

module.exports = transporter;
