const express = require('express');
const router = express.Router();

const newAuthorController = require("../controllers/newAuthorController")
const publisherController = require("../controllers/publisherController")
const Bookdocumentcontroller = require("../controllers/Bookdocumentcontroller")
router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


//Author routes

router.post("/createAuthordetails", newAuthorController.createAuthordetails)

// publisher routes
router.post("/createpublisherdetails", publisherController.createpublisherdetails)


// book router
router.post("/createbook", Bookdocumentcontroller.createbook)
router.get("/getAllBooksWithCompleteDetails", Bookdocumentcontroller.getAllBooksWithCompleteDetails)
router.put("/updateSpecificBooks", Bookdocumentcontroller.updateSpecificBooks)
router.get("/getbookdata", Bookdocumentcontroller.getbookdata)

module.exports = router;