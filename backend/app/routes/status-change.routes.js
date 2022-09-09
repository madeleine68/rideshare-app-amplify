
const auth_admin = require("../middleware/auth_admin");
module.exports = app => {
    const drivers = require("../controllers/status-change.controller");
  
    var router = require("express").Router();
    
    //###############################
    // My codes
    //###############################
    // router.post("/change/:value",drivers.status);
    router.post("/change",[auth_admin],drivers.status);

  
    app.use("/api/status", router);
  };
  