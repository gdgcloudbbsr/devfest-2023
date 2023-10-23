const mongoose = require("mongoose");

const DevFestTicketSchema = new mongoose.Schema({
    StudentTicket: {type: Number},
    ProfessionalTicket:{type:Number},
    year:{type:Number}
});

module.exports = mongoose.model(
  "devfest-tickets",
  DevFestTicketSchema
);
