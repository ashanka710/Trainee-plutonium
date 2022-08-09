const express = require('express');

const router = express.Router();

const logger = require("../logger/logger.js");
const helper = require("../util/helper")
const formatter = require('../validater/formatter')



router.get('/test-me', function(req, res) {
    // problem 1
    logger.printwelcome()

    //problem 2

    helper.date()
    helper.month()
    helper.batchinfo()

    //problem 3

    formatter.trim()
    formatter.changetoLowerCase()
    formatter.changeToUpperCase()
    res.send('My first ever api!')
});



module.exports = router;
// adding this comment for no reason