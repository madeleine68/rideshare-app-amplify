const db4 = require("../models/payment.index");
const Payment = db4.payments;
const Op = db4.Sequelize.Op;
const bcrypt = require("bcrypt");

exports.fill = async (req, res) => {
    console.log("Payment Controller/ Fill\n")
    console.log("payment body: ",req.body)
    // Validate request
    if (!req.body.payer || !req.body.date ||  !req.body.time || !req.body.seats_booked || !req.body.amount || !req.body.drivers_name || !req.body.total_fare || !req.body.wage || !req.body.fee || !req.body.profit ) {
        console.log("at least one field is empty")
      res.status(400).send({
        message: "payments info can not be empty!!!"
      });
      return;
    }
  

    // Create a payment
    const paymentInfo = {
        payer: req.body.payer,
        date: req.body.date,
        time: req.body.time,
        seats_booked: req.body.seats_booked,
        amount: req.body.amount,
        drivers_name: req.body.drivers_name,
        total_fare: req.body.total_fare,
        wage: req.body.wage,
        fee: req.body.fee,
        profit: req.body.profit
    };
  
    // Save payment in the database(db4)
    Payment.create(paymentInfo)
      .then(data => {
          console.log("payment saved ...")
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Driver."
        });
      });
  };