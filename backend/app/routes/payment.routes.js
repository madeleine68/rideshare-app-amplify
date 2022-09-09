
// const auth_admin = require("../middleware/auth_admin");
module.exports = app => {
    const payment = require("../controllers/payment.controller");
  
    var router = require("express").Router();
    
    //###############################
    // My codes
    //###############################
    // router.post("/fill",[auth_role],drivers.status); MW checks if this is done by the payer
    router.post("/fill",payment.fill);

  
    app.use("/api/payment", router);
  };
  