const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
    {
        cardNumber: {
            type: String, //Auto_increment e.g: C001
        },
        cardType: {
            type: String,
            enum: ["REGULAR","SPECIAL"] 
        },
        customerName: {
            type: String,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE"
        }, 
        vision: {
            type: String,
        },
        customerID: {
            type: String, //Reference from customer table

        },
    }
    ,{ timestamps: true }

);



module.exports = mongoose.model("Card", cardSchema)


