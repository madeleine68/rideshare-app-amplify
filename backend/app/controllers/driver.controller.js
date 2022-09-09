const db = require("../models");
const Driver = db.drivers;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  //testing MW1 next()
  // console.log("Driver.controller/ req.user: ",req.user);

  console.log("create ... \n")
  // Validate request
  console.log("req.body is fulll: \n \n",req.body);
  // if (!req.body.name || !req.body.to || !req.body.origin || !req.body.arrivingAt || !req.body.leavingAt || !req.body.seats || !req.body.amount || !req.body.leavingTime || !req.body.arrivingTime) {
    if (!req.body.name || !req.body.to || !req.body.from || !req.body.seats || !req.body.amount || !req.body.leavingTime || !req.body.leavingAt ) {
    // console.log("req.body: \n \n",req.body.to);
    res.status(400).send({
      message: "Driver's info can not be empty!!!"
    });
    return;
  }

  // Driver can post his entry when status == 1
  // if(req.user.token_status == 0){
  //   console.log("req.user.token_status",req.user.token_status);
      // Create a Driver
    const driver = {
      name: req.body.name,
      from: req.body.from,
      to: req.body.to,
      leavingAt: req.body.leavingAt,
      // arrivingAt: req.body.arrivingAt,
      seats: req.body.seats,
      amount: req.body.amount,
      leavingTime:req.body.leavingTime,
      // arrivingTime: req.body.arrivingTime
    };

    // Save Driver in the database
    
    
    Driver.create(driver)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.status(500).send({
          message:
            error.message || "Some error occurred while creating the Driver."
        });
      });
  // // } else {
  //   console.log("Driver is not verified yet")
  //   res.status(401).send({message: "Your profile is being under verification process. You'll be updated soon."})
  // // }
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
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
//         message: "ErrorOZ retrieving Driver with id=" + id
//       });
//     });
// };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Driver.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Driver was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Driver with id=${id}. Maybe driver was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Driver with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Driver.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Driver was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Driver with id=${id}. Maybe Driver was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Driver with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Driver.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Drivers were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all drivers."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Driver.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving drivers."
      });
    });
};

//#######################################################
//
//                    My Codes
//
//#######################################################

//passenger query by month and leaving date:
exports.passenger = (req,res)=>{
  // const from = req.query.from
  console.log('passenger query initiated .......')
 

  Driver.findAll({ where: {
    from: req.query.from,
    to: req.query.to,
    leavingAt: req.query.leavingAt
    
    } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving drivers."
    });
  });
}