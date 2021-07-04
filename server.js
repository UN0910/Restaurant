var express = require('express');
const app = express()
const path = require('path')
const cors = require("cors")
const mongoose = require('mongoose')
require("dotenv").config({ path: "./config/config.env" });
const bodyParser = require('body-parser');
var UserRouter = require("./routes/user");
// var ejs = require('ejs');
var enquiryRouter = require("./routes/enquiry");
var loyaltyRouter = require("./routes/points");
// var SlotsRouter = require('./routes/timeSlots');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connection.on("connected", () => {
  console.log("connected to mongo yeah !");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting to mongo ", err)
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

///Router
/// Server check
app.get('/', function (req, res, next) {
  res.send('Hey there!');
});

app.use('/user', UserRouter)
app.use('/enquiry', enquiryRouter)
// app.use('/slots', SlotsRouter)
app.use('/points', loyaltyRouter)

// app.set('view engine', 'ejs');
// app.get("/reset-password/:token", function (req, res) {
//   res.sendFile(__dirname + "/views/resetPassword.ejs");
// });

app.listen(process.env.PORT, () => {
  console.log("running on PORT Super Admin ", process.env.PORT);
});

module.exports = app;
