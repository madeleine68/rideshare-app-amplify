module.exports = app => {
    const drivers = require("../controllers/driver-signup.controller");
  
    var router = require("express").Router();
    
    //added
 
    //###############################
    // My codes
    //###############################
    router.get("/all",drivers.findAll99);
    router.post("/signup",drivers.signup);

  
    app.use("/api/driver-register", router);
  };
  