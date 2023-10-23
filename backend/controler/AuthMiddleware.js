const User = require("../model/member-registration");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.jwtToken;
  console.log(req.cookies);
  console.log("Token in auth middleware "+token);
  if (!token) {
    console.log('error in if');
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log('error in jwt verify if');
      return res.json({ status: false });
    } else {
      const user = await User.findOne({ emailAddress: data.id });
      if (user) return res.json({ status: true, user: user });
      else return res.json({ status: false });
    }
  });
};
