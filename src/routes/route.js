// // const express = require('express');

// // const router = express.Router();
// // const userController = require("../controllers/userController");
// // const {
// //     authenticate,
// //     authorise,
// //     authorise2
// // } = require('../middleware/auth');


// // router.get("/test-me", function(req, res) {
// //     res.send("My first ever api!")
// // })

// // router.post("/users", userController.createUser)

// // router.post("/login", authenticate, userController.loginUser)

// // //The userId is sent by front end
// // router.get("/users/:userId", authorise, userController.getUserData)
// // router.post("/users/:userId/posts", authorise, userController.postMessage)

// // router.put("/users/:userId", authorise2,
// //     userController.updateUser)
// // router.delete('/users/:userId', authorise, authorise2, userController.deleteUser)

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const userController = require("../controllers/userController")
// const mw = require("../middleware/auth")

// router.get("/test-me", function(req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", mw.authenticate, mw.authorise, userController.getUserData)
// router.post("/postusers/:userId/posts", userController.postMessage)

// router.put("/users/:userId", mw.authenticate, mw.authorise, userController.updateUser)
// router.delete('/users/:userId', mw.authenticate, mw.authorise, userController.deleteUser)

// module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const middleware = require("../middleware/auth")
router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createusers", userController.createUser)

router.post("/loginuser", userController.loginUser, middleware.authenticate)

//The userId is sent by front end
router.get("/getusers/:userId", middleware.authorise, middleware.authorise2, userController.getUserData)
router.post("/postusers/:userId/posts", userController.postMessage)

router.put("/updateusers/:userId", middleware.authorise, userController.updateUser)
router.delete('/deleteusers/:userId', middleware.authorise, userController.deleteUser)

module.exports = router;