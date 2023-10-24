const memberRegistrationModel = require("../model/member-registration");
const ticketModel = require("../model/ticket");
const { createSecretToken } = require("../utils/SecretToken");
const transporter = require("../utils/email");
const bcrypt = require("bcrypt");

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
        res.cookie("jwtToken", token);
        res.status(201).json({
          message: "User signed in successfully",
          success: true,
          jwttoken: token,
        });
      })
      .catch((err) => {
        console.error("Error saving registration:", err);
        res.status(500).send({ error: err, message: "Error Occurred" });
      });
  }
};


module.exports.bookTicket = async (req, res) => {
  try {
    console.log("bookticket request received");
    const TicketType = "STUDENT"; // You can switch between "STUDENT" and "PROFESSIONAL"
    const { user } = req.body;
    const User = await memberRegistrationModel.findOne({
      emailAddress: user.emailAddress,
    });
    console.log(User);
    const Tickets = await ticketModel.findOne({ year: 2023 });
    console.log(Tickets);

    // Student Ticket
    if (TicketType == "STUDENT") {
      if (Tickets.StudentTicket > 0) {
        const ticketCount = Tickets.StudentTicket;
        const ticketID = `DEVFEST2023S${(300 - ticketCount + 1)
          .toString()
          .padStart(3, "0")}`;
        Tickets.StudentTicket--;
        User.is_paid = true;
        User.unique_id = ticketID;
        console.log(ticketID);
        // Use findByIdAndUpdate to update the document by its _id
        await ticketModel.findByIdAndUpdate(Tickets._id, { $set: Tickets });
        await memberRegistrationModel.findByIdAndUpdate(User._id, { $set: User });

        console.log("Updated StudentTicket:", Tickets.StudentTicket);
        res.send("Ticket booked successfully.");
      } else {
        console.log("No available student tickets.");
        res.status(400).send("No available student tickets.");
      }
    }
    // Professional Ticket
    else {
      console.log(Tickets.ProfessionalTicket);
      if (Tickets.ProfessionalTicket > 0) {
        const ticketCount = Tickets.ProfessionalTicket;
        const ticketID = `DEVFEST2023P${(300 - ticketCount + 1)
          .toString()
          .padStart(3, "0")}`;
        Tickets.ProfessionalTicket--;
        User.is_paid = true;
        User.unique_id = ticketID;
        console.log(ticketID);
        // Use findByIdAndUpdate to update the document by its _id
        await ticketModel.findByIdAndUpdate(Tickets._id, { $set: Tickets });
        await memberRegistrationModel.findByIdAndUpdate(User._id, { $set: User });

        console.log("Updated ProfessionalTicket:", Tickets.ProfessionalTicket);
        res.send("Ticket booked successfully.");
      } else {
        console.log("No available professional tickets.");
        res.status(400).send("No available professional tickets.");
      }
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("An error occurred while booking the ticket.");
  }
};


module.exports.sendEmail = async (req, res) => {
  console.log("sendEmail request received");
  console.log(req.body);
  const { name, message,email } = req.body;

  const mailOptions = {
    from: 'Devfest Queries',
    to:'contact@gdgbbsr.in',
    subject:'Contact From GDG Bhubaneswar Website',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  };

    console.log(mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Email could not be sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
  res.status(200).send('Email sent successfully');
};

module.exports.user_forgotPassword = async (req, res) => {
  const { Email } = req.body;
  try {
    const user = await memberRegistrationModel.findOne({
      emailAddress: Email,
    });

    if (!user) {
      res.status(400).send("User not found");
    }

    const otp = Math.floor(1000 + Math.random() * 9000);
    const otpExpire = new Date();
    otpExpire.setMinutes(otpExpire.getMinutes() + 5);

    user.otp = otp;
    user.otp_expiry = otpExpire;

    await user.save();
    const userupdated = await memberRegistrationModel.findOne({
      emailAddress: "chakitsharma444@gmail.com",
    });
    console.log(userupdated);

    const mailOptions = {
      from: "gdgcloudbbsr@gmail.com",
      to: "chakitsharma444@gmail.com",
      subject: "Password reset OTP",
      text: `Your OTP (It expires after 5 min): ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return next(new AppError(error, 500));
      } else {
        res.status(200).send("OTP sent successfully");
      }
    });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

module.exports.user_resetPassword = async (req, res) => {
  try {
    const user = await memberRegistrationModel.findOne({
      Otp: req.body.otp,
      otpExpire: { $gt: new Date() },
    });
    console.log(user);
    if (!user) {
      res.status(400).send("Invalid OTP");
    } else {
      user.password = "chakit";
      user.otp = null;
      user.otpExpire = null;

      await user.save();
      res.status(200).send("Password updated successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};