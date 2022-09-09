const db1 = require("../models/driver-signup-index");
const Driver = db1.drivers;
const Op = db1.Sequelize.Op;
const bcrypt = require("bcrypt");

// Create and Save a new Tutorial
exports.signup = async (req, res) => {
  console.log("signup create ... \n")
  // Validate request
  console.log("req.body is fulll: \n",req.body);
  if (!req.body.name || !req.body.email ||  !req.body.password || !req.body.phone || !req.body.category || !req.body.make || !req.body.model || !req.body.year || !req.body.kilometers || !req.body.plateNum || !req.body.licenceNum ) {
      console.log("at least one field is empty")
    res.status(400).send({
      message: "Driver's info can not be empty!!!"
    });
    return;
  }

  //hashing the password
  const salt = await bcrypt.genSalt(10);
  console.log("salt: ",salt)
  const hash_password = await bcrypt.hash(req.body.password, salt);
  // console.log("hash pass: ",hash_password)
  // Create a Driver
  const driverInfo = {
    name: req.body.name,
    email: req.body.email,
    password: hash_password,
    phone: req.body.phone,
    category: req.body.category,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    kilometers: req.body.kilometers,
    plateNum: req.body.plateNum,
    licenceNum: req.body.licenceNum

  };

  // Save Driver in the database
  Driver.create(driverInfo)
    .then(data => {
      // console.log('data created', data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Driver."
      });
    });
};

//Retrieve all drivers from the database.
exports.findAll99 = (req, res) => {
    console.log("signup findALL drivers... \n \n")
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Driver.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving driverss."
      });
    });
};

// Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Driver.findByPk(id)
//     .then(data => {
//       if (data) {
//         res.send(data);
//       } else {
//         res.status(404).send({
//           message: `Cannot find Driver with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "ErrorO retrieving Driver with id=" + id
//       });
//     });
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   Driver.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Driver was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Driver with id=${id}. Maybe driver was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Driver with id=" + id
//       });
//     });
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Driver.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Driver was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Driver with id=" + id
//       });
//     });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Driver.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Drivers were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all drivers."
//       });
//     });
// };

// // find all published Tutorial
// exports.findAllPublished = (req, res) => {
//   Driver.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving drivers."
//       });
//     });
// };

// //#######################################################
// //
// //                    My Codes
// //
// //#######################################################

// //passenger query by month and leaving date:
// exports.passenger = (req,res)=>{
//   console.log('passenger query initiated .......')
//   Driver.findAll({ where: {
//      from: req.body.from,
//      to: req.body.to,
//      leavingAt: req.body.leavingAt,

//     } })
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "Some error occurred while retrieving drivers."
//     });
//   });
// }