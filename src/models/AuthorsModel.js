const mongoose = require("mongoose")
const AuthorSchema = new mongoose.Schema({

    author_id: {
        type: Number,

    },
    author_name: String,
    age: Number,
    address: String



}, { timestamps: true });
module.exports = mongoose.model('Authors', AuthorSchema)