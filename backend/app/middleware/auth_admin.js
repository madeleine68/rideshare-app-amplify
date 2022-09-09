// Import dependencies
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    console.log("MW1/ admin auth triggered...")
    const token = req.header("x-admin-auth-token");
    console.log("x-admin-auth-token: ",token);

    if (!token) return res.status(401).send({
        ok: false,
        error: "Access denied. No token provided"
    });

    try {
        const decoded = jwt.verify(token, "jwtPrivateKey6655");
        console.log("MW/admin auth:  decoded:",decoded)
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