const BooksModel = require("../models/BooksModel.js")
const AuthorsModel = require("../models/AuthorsModel.js")


const createBook1 = async function(req, res) {
    let data = req.body
    let savedData = await BooksModel.create(data)
    res.send({ msg: savedData })


}
const createAuthor = async function(req, res) {
        let data = req.body
        let savedData = await AuthorsModel.create(data)
        res.send({ msg: savedData })
    }
    // List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one
    //  after another- first query will find the author_id for "Chetan Bhagat”. 
    // Then next query will get the list of books with that author_id )



const booklist = async function(req, res) {
    const authorDetails = await AuthorsModel.find({ author_name: "Chetan Bhagat" })
    const id = authorDetails[0].author_id

    const booksName = await BooksModel.find({ author_id: id }).select({ name: 1 })
    res.send({ msg: booksName })
}






// find the author of“ Two states” and update the book price to 100;
// Send back the author_name and updated price in response.
// (This will also need 2 queries - 1 st will be a findOneAndUpdate.
// The second will be a find query aith author_id from previous query)
const findAndUpdate = async function(req, res) {
    let bookprice = await BooksModel.findOneAndUpdate({
        author_name: "TwoState"

    }, { price: 100 }, { new: true })

    let updateprice = bookprice.price
    let savedData = await AuthorsModel.find({
        author_id: { $eq: bookprice.author_id }
    }).select({ author_name: 1, _id: 0 });
    res.send({
        savedData,
        updateprice
    })
}






// Find the books which costs between 50 - 100(50, 100 inclusive) and respond back with the author names of respective books..
// bookModel.find({ price: { $gte: 50 }, price: { $lte: 100 } }) // WRONG
// bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1 })..run a map(or forEach) loop and get all the authorName corresponding to the authorId’ s(by querying authorModel)




const findbookprice = async function(req, res) {
    let allbooks = await BooksModel.find({
        price: { $gte: 50, $lte: 100 }
    })
    let store = allbooks.map(x => x.author_id);
    let newbook = await AuthorsModel.find({ author_id: store }).select({ author_name: 1, _id: 0 })
    res.send(newbook)
}


module.exports.createBook1 = createBook1
module.exports.createAuthor = createAuthor

module.exports.booklist = booklist
module.exports.findAndUpdate = findAndUpdate
module.exports.findbookprice = findbookprice