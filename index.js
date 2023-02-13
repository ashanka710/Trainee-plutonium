const express = require("express")
const app = express();
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const routes = require("./routes/route.js")

// pass json 
app.use(express.json())

// Connect MongoDB


mongoose.connect("mongodb+srv://love2rizwan:CodingKe000Deewane@cluster0.xntbvdy.mongodb.net/JaikisanBackend", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log(error.message))



app.use("/", routes)
    

app.listen(process.env.PORT || 3000, function () {
    console.log("server is running on PORT " + (process.env.PORT || 3000))
})