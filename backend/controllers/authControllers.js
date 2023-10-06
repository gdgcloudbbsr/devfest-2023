const bcrypt = require('bcrypt');
const memberRegistrationModel = require("../model/member-registration");
const memberModel = require("../model/member");
const member = require('../model/member');
const { Exception } = require('sass');

module.exports.login= async (req, res) => {
console.log("Login request received");
  const { email, password } = req.body;
    console.log(email);
    console.log(password);
  try {
    const user = await memberRegistrationModel.findOne({ emailAddress: email.toLowerCase() });
    console.log(user);

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    memberModel.name=user.name;
    memberModel.emailAddress=user.emailAddress;
    memberModel.workEmailAddress=user.workEmailAddress;
    memberModel.occupation=user.occupation;
    memberModel.designation=user.designation;
    memberModel.nameInstitute=user.nameInstitute;
    memberModel.city=user.city;

    res.json(memberModel);
    console.log("Login successful");
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};
