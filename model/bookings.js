const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    transactionId : {
        // type : mongoose.Schema.Types.ObjectId, ref: 'Transaction',
        type: String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId, ref: 'User',
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone_number : {
        type : Number,
        required : true
    },
    special_request : {
        type : String
    },
    promo_used : {
        type : String
    },
    restaurant_id : {
        type : mongoose.Schema.Types.ObjectId, ref : 'Restaurant',
        required : true
    },
    table_id : {
        type : mongoose.Schema.Types.ObjectId, ref : 'Table',
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    timeSlot : {
        type : String,
        required : true
    },
    people : {
        type : Number,
        required : true
    },
    occasion :{
        type : String
    },
    dietary_preferences : {
        type : String
    },
    special_request : {
        type : String
    },
    status :{
        type : String,
        enum : ["active","completed","cancelled"],
        required : true
    }
});

const Bookings = new mongoose.model("Booking",bookingSchema);

module.exports = Bookings;