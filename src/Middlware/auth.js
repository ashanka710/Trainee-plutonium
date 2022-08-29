const jwt = require("jsonwebtoken")
const mid1 = async function(req, res, next) {
    let token = req.header["x-Auth-token"]
    if (!token) {
        token = req.headers["x-auth-token"];
    }
    if (!token) {
        return res.send({ status: false, msg: "token must be present" });

    }
    let decodedToken = jwt.verify(token, "function-plutonium")
    if (!decodedToken) {
        return res.send({ status: false, msg: "token is valid" });

    }
    console.log(decodedToken)
    next();

}
module.exports.mid1 = mid1