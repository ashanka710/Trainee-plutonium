const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const BookdocumentModel3 = new mongoose.Schema({
    name: String,
    author: {
        required: true,
        type: ObjectId,
        ref: "newAuthor"
    },
    price: Number,
    ratings: Number,
    publisher: {
        required: true,
        type: ObjectId,
        ref: "Publisher"
    },
    isHardCover: {
        type: Boolean,
        default: false
    }

}, { timestamps: true });
module.exports = mongoose.model('Bookdocument1', BookdocumentModel3)