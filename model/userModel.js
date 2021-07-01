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
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    profile_img : {
        type : String
    },
    loyalty_points : {
        type : [{type: mongoose.Schema.Types.ObjectId, ref: 'Loyalty' }]
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
        type:[{type : mongoose.Schema.Types.ObjectId, ref : 'Review'}]
    },
    inquiries : {
        type:[{type : mongoose.Schema.Types.ObjectId, ref : 'Inquiry'}]
    }
}); 

const User = new mongoose.model("User",userSchema);
module.exports = User;