const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
var validate = require("validate.js");
const superAdminModel = require('../model/superAdminModel');
const Restaurant = require("../model/restaurantModel");


/////////------ User SignUp ----////////////////


/////////------ User SignIn ----////////////////
exports.createRestaurant = (req, res) => {
  const { restaurant_name, cuisines, opening_timings, current_rating, thumbnail_images
    , restaurant_images, address, latitude, longitude, phone

    , menu } = req.body;
  let coordinates = [latitude, longitude]
  let location = { type: "Point", coordinates: coordinates }
  const newRestaurant = new Restaurant({
    location: location,
    cuisines: cuisines,
    opening_timings: opening_timings,
    current_rating: current_rating,
    menu: menu,
    thumbnail_images: thumbnail_images,
    restaurant_images: restaurant_images,
    address: address,
    phone: phone,
    restaurant_name: restaurant_name
  })
  newRestaurant.save().then(found => {
    res.json(found)
  }).catch(err => {
    console.log(err)
  })
};
// exports.getNearby = (req, res) => {

//   Restaurant.find({
//     location: {
//      $near: {
//       $maxDistance: 100000,
//       $geometry: {
//        type: "Point",
//        coordinates: [ 22.744108,77.752449]
//       }
//      }
//     }
//    }).then(found=>{
//      res.json(found)
//    }).catch(err=>{
//      res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
//    })

// };