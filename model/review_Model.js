const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    content:{type:String},
    rating:{type:Number, max : 10, min : 1},
},{timestamp:true});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
