const newAuthorModel1 = require("../models/newAuthorModel1")

// 1. Write a POST api that creates an author from the details in request body
const createAuthordetails = async function(req, res) {
    const author = req.body
    const details = await newAuthorModel1.create(author)
    res.send({
        msg: details
    })
}



module.exports.createAuthordetails = createAuthordetails