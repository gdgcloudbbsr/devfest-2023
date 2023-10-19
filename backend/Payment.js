const Razorpay = require("razorpay");
require("dotenv").config()

// var RazorPayInstance = new Razorpay({
//   key_id: process.env.Razor_key_id,
//   key_secret: process.env.Razor_key_secret,
// });

module.exports.RazorPayOrder = async (req, res) => {
  console.log("Payment request received");
  var options = {
    amount: 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "rcp1",
  };
  // RazorPayInstance.orders.create(options, function (err, order) {
  //   console.log(order);
  //   res.send({ orderId: order.id });
  // });
};
