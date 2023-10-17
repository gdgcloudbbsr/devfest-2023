const memberRegistrationModel = require("../model/member-registration");
const { createSecretToken } = require("../utils/SecretToken");
module.exports.saveRegistration = async (req, res) => {
  console.log("Request received");
  const { registration } = req.body;
  console.log(registration);
  const user = await memberRegistrationModel.findOne({
    emailAddress: registration.emailAddress,
  });
  if (user) {
    res.status(409).send({ message: "User Already Exists" });
  } else {
    memberRegistrationModel
      .create(registration)
      .then((data) => {
        console.log("Saved Successfully");
        const token = createSecretToken(data.emailAddress);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.status(201).json({
            message: "User signed in successfully",
            success: true,
            user,
        });
        //res.status(201).send(data);
      })
      .catch((err) => {
        console.error("Error saving registration:", err);
        res.status(500).send({ error: err, message: "Error Occurred" });
      });
  }
};
