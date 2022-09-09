const db1 = require("../models/driver-signup-index");
const Driver = db1.drivers;
const Op = db1.Sequelize.Op;
const bcrypt = require("bcrypt");


//Retrieve all Tutorials from the database.
exports.status = async (req, res) => {
    console.log("Controller/ Status...")
    const {email,plate_num, new_status_value} = req.body;
    //check if the body contains the right elements
    if(email && plateNum, new_status_value){
        //find the target driver based on email and plate#
        const status_case = await Driver.findAll({ where: { email: email, plateNum:plate_num} });
        if (status_case.length === 0){
            console.log("Wrong email or plate number");
            res.status(404).send({err: "Wrong case, check out email/plate"})
        }else{
            // console.log("status_case: ",status_case);
            // This is where the status must change
            try {
                // var value = req.params.value
                // console.log("req.params.val: ",value)
                const result = await Driver.update(
                  { status: new_status_value },
                  { where: { email: email, plateNum:plate_num}}
                )
                console.log("updated result: ",result);
                res.status(200).send({message: "Status changed successfully"})
            } catch (err) {
                throw err
              }
            // res.status(200).send(status_case)
        }
    }else{
        console.log("Correct credentials are needed");
        res.status(404).send({err: "Correct credentials are needed...."})
    }
};
