const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const { mid1 } = require('../Middlware/auth');

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createUsers", userController.createUser)

router.post("/loginUser", userController.loginUser)

//The userId is sent by front end
router.get("/getusers/:userId", userController.getUserData)

router.put("/updateusers/:userId", userController.updateUser)
router.delete("/deleteUsers/:userId", userController.deleteUser)



module.exports = router;