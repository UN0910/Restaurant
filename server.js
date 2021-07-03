var express = require('express');
const app=express()
const path=require('path')
const cors = require("cors")
const mongoose=require('mongoose')
require("dotenv").config({path:"./config/config.env"});
const bodyParser = require('body-parser');
var authRouter = require('./routes/Auth');
var RestaurantRouter = require('./routes/restaurant');
var tableRouter = require('./routes/table');
var floorRouter = require('./routes/floor');
var userSignUp = require("./routes/Auth");
var ejs = require('ejs');


mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connection.on("connected", () => {
console.log("connected to mongo yeah !");
});
mongoose.connection.on("error",(err)=>{
  console.log("error connecting to mongo ",err)
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

///Router
/// Server check
app.get('/', function(req, res, next) {
  res.send('Welcome to Udemy');
});
// Auth Routers
app.use('/',authRouter)
app.use('/',RestaurantRouter)
app.use('/',tableRouter)
app.use('/',floorRouter)

app.use(userSignUp);

app.set('view engine', 'ejs');
app.get("/reset-password/:token", function(req, res) {
  res.sendFile(__dirname + "/views/resetPassword.ejs");
});


app.listen(process.env.PORT, () => {
  console.log("running on PORT Super Admin ",process.env.PORT);
});

module.exports = app;
