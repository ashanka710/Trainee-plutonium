const mongoose = require("mongoose");
const newPublisherModel2 = new mongoose.Schema({
    name: String,
    headQuarter: String,
    Publisher_Id: String


}, { timeseries: true })
module.exports = mongoose.model("Publisher", newPublisherModel2)