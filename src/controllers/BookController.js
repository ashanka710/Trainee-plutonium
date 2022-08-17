const BookModel = require("../models/BookModel")

const createBook = async function(req, res) {
    let bookdata = req.body
    let Book = await BookModel.create(bookdata)

    res.send({ msg: Book })
}


const getBook = async function(req, res) {
    let allBooks = await BookModel.find()
    res.send({ msg: allBooks })
}
module.exports.createBook = createBook
module.exports.getBook = getBook