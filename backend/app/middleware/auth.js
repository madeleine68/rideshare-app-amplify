// Import dependencies
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    console.log("MW1/ auth triggered...")
    const token = req.header("x-auth-token");
    console.log("MW/auth: req.header: ",token);

    if (!token) {
        res.redirect('/login');
        res.status(401).send({
            ok: false,
            error: "Access denied. No token provided",
        });
    } 


    try {
        const decoded = jwt.verify(token, "jwtPrivateKey8877");
        console.log("MW/auth:  decoded:",decoded)
        req.user = decoded;
        //added
        // req.boz = {"id":1234, "name":"boz"}
    } catch (error) {
        return res.status(401).send({
            ok: false,
            error: "Token expired"
        });
    }

    next();
}