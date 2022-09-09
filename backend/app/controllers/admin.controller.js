const db3 = require("../models/admin.index.js");
const jwt = require("jsonwebtoken");
const Modir = db3.modirha;
const Op = db3.Sequelize.Op;
const bcrypt = require("bcrypt");

// Create and Save a new Tutorial
exports.adminSignin = async (req, res) => {
    console.log("\n controller/ Admin signin ... \n")
//   res.status(200).send({"item":1, "age":30})
    const body = req.body;
    console.log("body: ",body);
    // res.status(200).send(body)

    //equivalent in mongoose:
    // const user = await User.findOne({ email: body.email });

    

    //findOne in sequel==>
    const {email,password} = body
    const project = await Modir.findOne({ where: { email: email} });
    if (project === null) {
        console.log('Not found!');
        res.status(404).send({error: "not found"})
    } else {
        console.log(project instanceof Modir); // true
        console.log(project.email); // 'My Title'

        //now check for the correct password:
        const validPassword = await bcrypt.compare(password, project.password);
        if (validPassword) {
            //Make a token and authorize this dude to make a POST request to 
            // http://localhost:6006/api/drivers

            console.log("validPassword: ",validPassword)

            //############# Token ################
            const token = jwt.sign({
                // id: project.id_u,
                token_email: project.email,
            }, "jwtPrivateKey6655", { expiresIn: "2m" });
            console.log("admin token: ",token)
        
            res.status(200).send({
                ok: true,
                token: "token created"
            });

            // res.status(200).send({pass: 'correct'})
            //#############End of Token ##########
            // res.status(200).json({ message: "Valid password" });
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }

        
    }

    
};

//############################### Sign up ###################################

exports.adminSignup = async (req, res) => {
    console.log("Admin signup create ... \n")
    // Validate request
    if (!req.body.email ||  !req.body.password ) {
        console.log("at least one field is empty")
      res.status(400).send({
        message: "Admin's info can not be empty!!!"
      });
      return;
    }
  
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(req.body.password, salt);
    // console.log("hash pass: ",hash_password)
    // Create a Driver
    // console.log("hash",hash_password)
    const adminInfo = {
      email: req.body.email,
      password: hash_password
    };
  
    // Save Driver in the database
    Modir.create(adminInfo)
      .then(data =>{
        //   console.log("data: ",data)
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Admin."
        });
      });
  };
  