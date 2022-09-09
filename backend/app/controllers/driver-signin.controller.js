const db1 = require("../models/driver-signup-index");
const jwt = require("jsonwebtoken");
const Driver = db1.drivers;
const Op = db1.Sequelize.Op;
const bcrypt = require("bcrypt");

exports.signin = async (req, res) => {
    console.log("\n controller/ signin ... \n")
//   res.status(200).send({"item":1, "age":30})
    const body = req.body;
    // res.status(200).send(body)

    //equivalent in mongoose:
    // const user = await User.findOne({ email: body.email });

    //findOne in sequel==>
    const {email,password} = body
    const project = await Driver.findOne({ where: { email: email} });
    if (project === null) {
        console.log('Not found!');
        res.status(404).send({error: "email address not found"})
    } else {
        console.log(project instanceof Driver); // true
        console.log(project.email); // 'My Title'

        //now check for the correct password:
        const validPassword = await bcrypt.compare(password, project.password);
       
        if (validPassword) {
            //Make a token and authorize this dude to make a POST request to 
            // http://localhost:6006/api/drivers

            //############# Token ################
            const token = jwt.sign({
                _id: project._id,
                // id: project.id_u,
                token_email: project.email,
                token_status: project.status
            }, "jwtPrivateKey8877");


            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000
            })
            res.status(200).send({
                message: 'success'
            });         
            //#############End of Token ##########
            // res.status(200).json({ message: "Valid password" });
        } else {
            res.status(400).json({ error: "Incorrect Password" });
        }
        
    }
};

exports.user = async (req, res) => {
    try {
        const cookie = req.cookies['jwt']

        const claims = jwt.verify(cookie, 'jwtPrivateKey8877')
        if (!claims) {
            return res.status(401).send({
                message: 'unauthenticated'
            })
        }
        const user =  await Driver.findOne({_id: claims._id})

        const {password, ...data} = await user.toJSON()

        res.send(data)
    } catch (e) {
        console.log(e)
    }
}

exports.logout = async (req, res) => {
    res.cookie('jwt', '', {maxAge: 0})

    res.send({
        message: 'success'
    })
}