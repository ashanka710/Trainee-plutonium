const BookdocumentModel3 = require("../models/BookdocumentModel3")
const newAuthorModel1 = require("../models/newAuthorModel1")
const newPublisherModel2 = require("../models/newPublisherModel2")
let mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId





const getbookdata = async function(req, res) {
    let book = await newPublisherModel2.find().popuplate("author").popuplate("publisher")
    res.send({ data: book })
}

// 3. Write a POST api that creates a book from the details in the request body.The api takes both the author and publisher from the request body.
// In this api, you have to write a logic that validates the following:


const createbook = async function(req, res) {
        let book = req.body

        // 3 a) The authorId is present in the request body.If absent send an error message
        // that this detail is required
        if (!book.author) {
            return res.send({ status: false, msg: "author id is a mandatory field" })
        }

        //3 b)If present, make sure the authorId is a valid ObjectId in the author collection.
        // If not then send an
        // error message that the author is not present.
        let author = await newAuthorModel1.findById(book.author)
        if (!author) {
            return res.send({ status: false, msg: "Author id is not valid" })
        }

        //3 c)The publisherId is present in the request body.
        //  If absent send an error message that this detail is required
        if (!book.publisher) {
            return res.send({ status: false, msg: "Publisher id is a mandatory field" })
        }

        // 3 d)If present, make sure the publisherId is a valid ObjectId in the publisher collection.
        //  If not then send an error message that the publisher is not present.
        let publisher = await newPublisherModel2.findById(book.publisher)
        if (!publisher) {
            return res.send({ status: false, msg: "Publisher id is not valid" })
        }

        let bookCreated = await BookdocumentModel3.create(book)
        res.send({ data: bookCreated })
    }
    // 4. Write a GET api that fetches all the books along with their author details
    //  (you have to populate for this)
    //  as well the publisher details (you have to populate for this) 
const getAllBooksWithCompleteDetails = async function(req, res) {
        let allBooks = await BookdocumentModel3.find().populate('author publisher')
        res.send({ data: allBooks })

    }
    // 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins).
    //  Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books
    //  with these publishers and authors.
    // Create a new PUT api / books and perform the following two operations
const updateSpecificBooks = async function(req, res) {
    //a) a) Add a new boolean attribute in the book schema called isHardCover with a 
    // default false value. For the books published by 'Penguin' and 'HarperCollins', 
    // update this key to true.
    // get books by the publioshers - Penguin and HarperCollins
    // let requiredPublishers =
    //     await newPublisherModel2.find({ $or: [{ name: "Penguin" }, { name: "HarperCollins" }] }, { _id: 1 })
    //     //let books = await bookModel.find().populate('publisher')
    //     //for
    // let requiredPublisherIds = []
    // for (let i = 0; i < requiredPublishers.length; i++) {
    //     requiredPublisherIds.push(requiredPublishers[i]._id)
    // }

    // let updatedBooks = await BookdocumentModel3.updateMany({ publisher: { $in: requiredPublisherIds } }, { isHardCover: true }, { new: true })
    // res.send({ data: updatedBooks })



    let data = await newPublisherModel2.find({ name: ["HarperCollins", "Penguin"] }).select({ _id: 1 })
    let bookid = await BookdocumentModel3.updateMany({ publisher: data }, {
        $set: {
            isHardCover: true,
            new: true
        }
    }, {
        upsert: true
    })
    let authorids = await newAuthorModel1.find({
        authorids: {
            $gt: 3.5
        }
    }).select({ _id: 1 })
    let rating = await BookdocumentModel3.updateMany({ author: authorids }, { $inc: { price: 10 } }, { upsert: true })
    res.send({ data: bookid, rating })
}

// b) For the books written by authors having a rating greater than 3.5,
//  update the books price by 10 (For eg if old price for such a book is 50, 
// new will be 60) 

module.exports.createbook = createbook
module.exports.getbookdata = getbookdata
module.exports.updateSpecificBooks = updateSpecificBooks
module.exports.getAllBooksWithCompleteDetails = getAllBooksWithCompleteDetails