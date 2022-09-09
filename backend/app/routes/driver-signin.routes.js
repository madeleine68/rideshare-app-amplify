const auth = require("../middleware/auth");

module.exports = app => {
    const drivers = require("../controllers/driver-signin.controller");
  
    var router = require("express").Router();
    
    //###############################
    // My codes
    //###############################
    router.post("/login", drivers.signin);
    
    router.get('/user', drivers.user)
    
    router.post('/logout', drivers.logout)
    
    app.use("/api/drivers", router);
    
  };
