const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
//     restaurant_floors: {
//     type: Array,
//   },
//   mergeable: {
//     type: Boolean,
//   },
//   restaurant_name:{
//       type:String
//   },
//   address:{
//       type:String
//   },
  location: {
    type: { type: String },
    coordinates: []
   },
});
RestaurantSchema.index({ location: "2dsphere" });
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
