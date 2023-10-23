const bcrypt = require("bcrypt");
const memberRegistrationModel = require("../model/member-registration");
const memberModel = require("../model/member");
const member = require("../model/member");
const { Exception } = require("sass");
const { createSecretToken } = require("../utils/SecretToken");

module.exports.login = async (req, res) => {
  console.log("Login request received");
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  try {
    const user = await memberRegistrationModel.findOne({
      emailAddress: email.toLowerCase(),
    });
    console.log(user);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = createSecretToken(user.emailAddress);
    res.status(201).json({ message: "User logged in successfully", success: true,jwttoken:token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Login failed" });
  }
};
