const memberRegistrationModel = require("../model/member-registration");
const ticketModel = require("../model/ticket");
const { createSecretToken } = require("../utils/SecretToken");
const transporter = require("../utils/email");

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
        res.status(201).json({
            message: "User signed in successfully",
            success: true,
            jwttoken:token
        });
      })
      .catch((err) => {
        console.error("Error saving registration:", err);
        res.status(500).send({ error: err, message: "Error Occurred" });
      });
  }
};

module.exports.bookTicket = async (req, res) => {
  console.log('bookticket request received');
  const TicketType='STUDENT';
  //const TicketType='PROFFESSIONAL';
  const { user } = req.body;
  const User=await memberRegistrationModel.findOne({emailAddress: user.emailAddress});
  console.log(User);
  const Tickets = await ticketModel.findOne({ year: 2023 });
  console.log(Tickets);

  //Student Ticket
  if(TicketType=='STUDENT'){
    if (Tickets.StudentTicket > 0) {
      const ticketCount = Tickets.StudentTicket;
      const ticketID = `DEVFEST2023S${(300 - ticketCount + 1).toString().padStart(3, '0')}`;
      Tickets.StudentTicket--;
      User.is_paid=true;
      User.unique_id=ticketID;
      console.log(ticketID);
      // Use findByIdAndUpdate to update the document by its _id
      await ticketModel.findByIdAndUpdate(Tickets._id, { $set: Tickets });
      await memberRegistrationModel.findByIdAndUpdate(User._id,{$set:User});
  
      console.log('Updated StudentTicket:', Tickets.StudentTicket);
      res.send('Ticket booked successfully.');
    } else {
      console.log('No available tickets.');
      res.status(400).send('No available tickets.');
    }
  }
  //Professional Ticket
  else{
    console.log(Tickets.ProfessionalTicket);
    if (Tickets.ProfessionalTicket > 0) {
      const ticketCount = Tickets.ProfessionalTicket;
      const ticketID = `DEVFEST2023P${(300 - ticketCount + 1).toString().padStart(3, '0')}`;
      Tickets.ProfessionalTicket--;
      User.is_paid=true;
      User.unique_id=ticketID;
      console.log(ticketID);
      // Use findByIdAndUpdate to update the document by its _id
      await ticketModel.findByIdAndUpdate(Tickets._id, { $set: Tickets });
      await memberRegistrationModel.findByIdAndUpdate(User._id,{$set:User});
  
      console.log('Updated ProfessionalTicket:', Tickets.ProfessionalTicket);
      res.send('Ticket booked successfully.');
    } else {
      console.log('No available tickets.');
      res.status(400).send('No available tickets.');
    }
  }

};

module.exports.sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'your_email@gmail.com',
    to,
    subject,
    text,
  };

  console.log(to, subject, text);

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.log(error);
  //     res.status(500).send('Email could not be sent');
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //     res.status(200).send('Email sent successfully');
  //   }
  // });
  res.status(200).send('Email sent successfully');
};
