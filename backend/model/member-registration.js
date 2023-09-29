const mongoose = require("mongoose")

const memberRegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  emailAddress: {
    type: String,
  },
  workEmailAddress: {
    type: String,
  },
  occupation: {
    type: String,
  },
  designation: {
    type: String,
  },
  nameInstitute: {
    type: String,
  },
  gender: {
    type: String,
  },
  city: {
    type: String,
  },
  howDoYouHear: {
    type: String,
  },
});

module.exports = mongoose.model("member-registration", memberRegistrationSchema);