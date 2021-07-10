const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

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
    favorites : {
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
    // inquiries : {
    //     type:[{type : mongoose.Schema.Types.ObjectId, ref : 'enquiry'}]
    // },
    resetPasswordToken: {
        type: String,
        required: false
    },
    resetPasswordExpires: {
        type: Date,
        required: false
    },
    referralToken: {
        type: String,
        required: false,
        unique: true
    },
    referralUsage: {
        type: [String],
        required: false
    }
}, {timestamps: true}
); 

userSchema.methods.generatePasswordReset = function() {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

userSchema.methods.generateReferralToken = function() {
    this.referralToken = crypto.randomBytes(3).toString('hex');
};

mongoose.set('useFindAndModify', false);
const User = new mongoose.model("User",userSchema);
module.exports = User;