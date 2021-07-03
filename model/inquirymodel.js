const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
    customer : {
        type : String,
        required : true
    },
    resolver : {
        type : String,
        required : true
    },
    messages : {
        type : [{type:mongoose.Schema.Types.ObjectId, ref : 'Message'}]
    }
});

const Inquiry = new mongoose.model("Inquiry",inquirySchema);

module.exports = Inquiry;