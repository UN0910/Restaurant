const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
        required: true
    },
    resolver: {
        type: String,
        // required: true
    },
    // messages: {
    //     type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
    // },
    content : {
        type : String,
        required : true
    },
    // creator : {
    //     type : String,
    //     required : true
    // },
    dateTime : {
        type : Date,
        default : Date.now
    }
});

const enquiry = new mongoose.model("enquiry", enquirySchema);

module.exports = enquiry;