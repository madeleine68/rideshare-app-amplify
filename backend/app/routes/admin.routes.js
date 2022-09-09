module.exports = app => {
    const admins = require("../controllers/admin.controller");
  
    var router = require("express").Router();
    
    //###############################
    // My codes
    //###############################
    
    //let's define the following manually
    // router.post("/signup",admins.adminSignup);
    router.post("/signin",admins.adminSignin);

  
    app.use("/api/admininfo", router);
  };
  