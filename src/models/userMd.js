const { default: mongoose } = require("mongoose");


const userMd = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: Number,
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["femail", "mail", "othor"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }, //default value is false 
    age: Number,
}, { timestamps: true })
module.exports = mongoose.model("user", userMd)