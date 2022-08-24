const mongoose = require('mongoose');

const newAuthorModel1 = new mongoose.Schema({
    authorName: String,
    age: Number,
    address: String,
    rating: Number
}, { timestamps: true })


module.exports = mongoose.model('newAuthor', newAuthorModel1);