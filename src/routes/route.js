const express = require('express')
const router = express.Router();

const Bookcontrollar = require("../controllers/Bookcontrollar.js")




router.post("/createBook1", Bookcontrollar.createBook1)
router.post("/createAuthor", Bookcontrollar.createAuthor)

router.get("/booklist", Bookcontrollar.booklist)
router.get("/findAndUpdate", Bookcontrollar.findAndUpdate)
router.get("/bookrange", Bookcontrollar.bookrange)

module.exports = router;