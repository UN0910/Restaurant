const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    creator : {
        type : String,
        required : true
    },
    dateTime : {
        type : Date,
        default : Date.now
    }
});

const Message = new mongoose.model("Message",messageSchema);

module.exports = Message;