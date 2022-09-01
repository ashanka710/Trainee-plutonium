// // const jwt = require("jsonwebtoken");
// // const { default: mongoose } = require("mongoose");
// // const userModel = require("../models/userModel");
// // const authenticate = async function(req, res) {
// //     let userName = req.body.emailId;
// //     let user = await userModel.findOne({ emailId: userName })
// //     let token = jwt.sign({
// //             userId: user._id.toString(),
// //             batch: "thorium",
// //             organisation: "FUnctionUp",
// //         },
// //         "functionup-thorium"
// //     );
// //     res.setHeader("x-auth-token", token);
// //     res.send({ status: true, data: token });

// // }

// // //-- -- -- --//


// const authorise = function(res, req, next) {
//         let token = req.headers["x-Auth-token"];
//         if (!token) token = req.headers["x-auth-token"]
//         if (!token) return res.send({ status: false, msg: "token must be present" });
//         let decodedToken = jwt.verify(token, "function-plutonium-key", (err, decode) => {
//             if (err) {
//                 return res.send("you have enterered incorrect token or , incorrect length of token")
//             }(decode == true)
//             next()
//         });
//     }
// // const authorise2 = function(res, req, next) {
// //     let token = req.headers["x-Auth-token"];
// //     if (!token) token = req.headers["x-auth-token"]
// //     if (!token) return res.send({ status: false, msg: "token must be present" });
// //     let decodedToken = jwt.verify(token, "functionup-plutonium-key")
// //     let userLoggedIn = decodedToken.userId
// //     let isValid = mongoose.Types.ObjectId.isValid(userToBeModified)
// //     if (isValid === false) {
// //         return res.send("length of the id is less than 24 digit")
// //     } else if (!decodedToken) {
// //         return res.send({ status: false, msg: "token is invalid " })
// //     } else if (userToBeModified != userLoggedIn) {
// //         return res.send({ status: false, msg: "User logged is not allow to modify the requested" })

// //     } else {
// //         next()
// //     }
// // }


// // // const validationToken = function(req, req, next) {

// // //     let token = req.headers["x-Auth-token"];
// // //     if (!token) token = req.headers["x-auth-token"]
// // //     console.log(token);
// // //     //check the token in request header
// // //     //validate this token
// // //     let decodedToken = jwt.verify(token, "finctionup");
// // //     if (!decodedToken) {
// // //         return res.send({ status: false, msg: "token is isnvalid" });
// // //     }
// // //     req.loggedInUser = decodedToken.userId

// // //     next()
// // // }


// // // const checkIfAuthorizes = function(req, res, next) {
// // //     // comapre the logged in user's id and the id in request
// // //     let requestedUserId = req.paams.userId
// // //     if (requestedUserId = req.paams.userId) {
// // //         return res, senf({ status: false, msg: "permission denied" })
// // //     }

// // //     next()
// // // }

// // module.exports.authenticate = authenticate
// // module.exports.authorise = authorise
// // module.exports.authorise2 = authorise2


// const jwt = require("jsonwebtoken");


// const authenticate = async function(req, res, next) {
//     let token = req.headers["x-Auth-token"];
//     if (!token) token = req.headers["x-auth-token"];
//     //If no token is present in the request header return error
//     if (!token) return res.send({ status: false, msg: "token must be present" });
//     let decodedToken = jwt.verify(token, "functionup-thorium");
//     if (!decodedToken)
//         return res.send({ status: false, msg: "token is invalid" });
//     next()
// }


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     let token = req.headers["x-Auth-token"];
//     if (!token) token = req.headers["x-auth-token"];
//     let decodedToken = jwt.verify(token, "functionup-thorium");
//     if (decodedToken.userId !== req.params.userId)
//         return res.send({ status: false, msg: "You are not authorizre to do this task" })
//     next()
// }



// module.exports.authenticate = authenticate
// module.exports.authorise = authorise


const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")
const mongoose = require('mongoose')



const authenticate = async function(req, res) {

    let userName = req.body.emailId;
    let user = await userModel.findOne({ emailId: userName })
    let token = jwt.sign({
            userId: user._id.toString(),
            batch: "Plutonium",
            organisation: "Function-up",
        },
        "functionup-Plutonium-key"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
};

// authorise ******************************************************************************************************88
const authorise = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-Plutonium-key", (err, decode) => {
        if (err) {
            return res.send("you have entered incorrect token or. incorrect length of token")
        }(decode == true)
        next()

    });
    console.log(decodedToken)

}

const authorise2 = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-Plutonium-key")
    let userLoggedIn = decodedToken.userId
    let userToBeModified = req.params.userId

    let isValid = mongoose.Types.ObjectId.isValid(userToBeModified)

    if (isValid === false) {
        return res.send("length of the id is less then 24 digit")
    } else if (!decodedToken) {
        return res.send({ status: false, msg: "token is invalid" });
    } else if (userToBeModified != userLoggedIn) {
        return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    } else {
        next()
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise
module.exports.authorise2 = authorise2