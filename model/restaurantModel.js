const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
    restaurant_floors: [{_id:false, floor: { type: mongoose.Schema.Types.ObjectId, ref: 'Floor' } }],
    reviews: [{_id:false, review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' } }],
    mergeable: {
        type: Boolean,
    },
    restaurant_name: {
        type: String
    },
    current_rating:{type:Number},
    menuList:{ _id:false,pdf_link:{type:String} },
    address: {
        type: String
    },
    phone: {
        type: Number
    },
    thumbnail_images: [],
    restaurant_images: [],
    opening_timings:[{_id:false,day:{type:String},timeslots:[]}],
    cuisines: [],
    location: {
        type: { type: String },
        coordinates: []
    },
    
},
{ timestamps: true });
RestaurantSchema.index({ location: "2dsphere" });
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
