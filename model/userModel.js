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
    }
}, {timestamps: true}
); 

userSchema.pre('save',  function(next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    let payload = {
        id: this._id,
        name: this.name,
        email: this.email,
        phone: this.phone,
        dob: this.dob
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
    });
};

userSchema.methods.generatePasswordReset = function() {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

mongoose.set('useFindAndModify', false);
const User = new mongoose.model("User",userSchema);
module.exports = User;