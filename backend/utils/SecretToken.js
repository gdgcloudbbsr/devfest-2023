require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  console.log(id);
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "1h"
  });
};