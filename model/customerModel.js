const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid")
// let id = uuidv4();

// console.log("uuid ==> ", id);



const customerSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required:true
  },
    lastName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true  //10 digits long
    }, 
    DOB: {
        type: Date,
        required: true
    },
    emailID: {
        type: String,  //abc@xyz.com 
        required: true,
        unique:true
    }, 
    address: {
        type: String
    },
    customerID: {
        type: String
        // required: true,
        // unique: true,
        // default: id   //  UUID
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    }, 
    isDeleted: {
        type: Boolean,
        default: false
    }

}, {timestamps:true});


module.exports = mongoose.model("Customer", customerSchema)