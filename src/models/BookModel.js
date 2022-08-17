const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    tags: [String],
    itpublished: Boolean
}, { timestamps: true });
module.exports = mongoose.model('book', bookSchema);