const auth = require("../middleware/auth");
module.exports = app => {
    const drivers = require("../controllers/driver.controller.js");
  
    var router = require("express").Router();
    
    //added
 
  
    // Create a new Tutorial
    router.post("/", drivers.create);
    
  
    // Retrieve all drivers
    router.get("/", drivers.findAll);
  
    // Retrieve all published drivers
    router.get("/published", drivers.findAllPublished);
  
   
    // router.get("/:id", drivers.findOne);
  
  
    // Update a Tutorial with id
    router.put("/:id", drivers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", drivers.delete);
  
    // Delete all drivers
    router.delete("/", drivers.deleteAll);

    //###############################
    // My codes
    //###############################
    // router.get("/trip/passenger",[authMW],drivers.passenger);
    router.get("/passenger",drivers.passenger);
    
  
    app.use("/api/trip", router);
  };
  