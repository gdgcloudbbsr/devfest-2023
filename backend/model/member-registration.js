const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

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
  password: { type: String},
  is_paid:{type:Boolean,default:false},
  check_in:{type:Boolean,default:false},
  lunch:{type:Boolean,default:false},
  swag:{type:Boolean,default:false},
  unique_id:{type:String}
});

memberRegistrationSchema.pre('save', async function(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model("member-registration", memberRegistrationSchema);