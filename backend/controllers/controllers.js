const memberRegistrationModel = require("../model/member-registration");

module.exports.saveRegistration = (req, res) => {
    console.log("Request received");
    const { registration } = req.body;
    console.log(registration);
    memberRegistrationModel.create(registration)
      .then((data) => {
        console.log("Saved Successfully");
        res.status(201).send(data);
      })
      .catch((err) => {
        console.error("Error saving registration:", err);
        res.status(500).send({ error: err, message: "Error Occurred" });
      });
  };
  