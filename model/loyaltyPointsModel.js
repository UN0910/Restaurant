const mongoose = require("mongoose");

const loyaltySchema = new mongoose.Schema({
    index : Number,
    date : {
        type : Date,
        default : Date.now
    },
    points : {
        type : Number,
        default : 0
    },
    openingBalance : {
        type : Number,
        default : 0
    },
    closingBalance : {
        type : Number,
        default : 0
    },
    type : {
        type : String,
        required : true
    },
    customer : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    }    
});

const Loyalty = new mongoose.model("Loyalty-point",loyaltySchema);

module.exports = Loyalty;