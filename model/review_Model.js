const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    content:{type:String},
    rating:{type:Number},
},{timestamp:true});

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
