const newPublisherModel2 = require("../models/newPublisherModel2")

// 2. Write a POST api that creates a publisher from the details in the request body

const createpublisherdetails = async function(req, res) {
    let publisher = req.body
    let details = await newPublisherModel2.create(publisher)
    res.send({ msg: details })

}

module.exports.createpublisherdetails = createpublisherdetails