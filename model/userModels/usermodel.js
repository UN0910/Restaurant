const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number,
        required : true,
        min : 10,
        max : 10
    },
    dob : {
        type : Date,
        required : true
    },
    profile_img : {
        type : String,
        required : true
    },
    loyalty_points : {
        type: mongoose.Schema.Types.ObjectId, ref: 'Loyalty' 
    },
    favourite_restaurants : {
        type : Array
    },
    cuisine_preferences : {
        type : Array
    },
    transaction : {
        type  : String
    },
    reviews : {
        type : mongoose.Schema.Types.ObjectId, ref : 'Review'
    },
    inquiries : {
        type : mongoose.Schema.Types.ObjectId, ref : 'Inquiry'
    }
});

const User = new mongoose.model("User",userSchema);
module.exports = User;