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
const booklist = async function(req, res) {
    let authorlist = await AuthorsModel.findOne({
        authorName: "chaitan bhagjhat"
    })

    let Booklist = await BooksModel.find({ author_id: { $eq: authorlist[0].author_id } });
    res.send({ msg: Booklist })
}

const findAndUpdate = async function(req, res) {
    let update = await BooksModel.findOneAndUpdate({
        author_name: "TwoState"

    }, { price: 100 }, { new: true })
    console.log(update)
    let updateprice = update.price
    let savedData = await AuthorsModel.find({
        author_id: { $eq: bookprice.author_id }
    }).select({ author_name: 1, _id: 0 });
    res.send({
        savedData,
        updateprice
    })
}
const bookrange = async function(req, res) {
    let range = await BooksModel.find({ price: { $gte: 50, $let: 200 } })
    let a = range.map(x => x.author_id)

    let newrange = await AuthoreModel.find({ author_id: a }).select({ authorName: 1, _id: 0 })
    res, send({ newrange })
}




module.exports.createBook1 = createBook1
module.exports.createAuthor = createAuthor
module.exports.booklist = booklist
module.exports.findAndUpdate = findAndUpdate
module.exports.bookrange = bookrange