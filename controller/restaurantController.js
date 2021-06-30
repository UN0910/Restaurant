const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
var validate = require("validate.js");
const superAdminModel = require('../model/superAdminModel');
const Restaurant = require("../model/restaurantModel");
const Table = require("../model/TableModel");
const Floor = require("../model/floorModel");
/////////------ Super Admin Can get Restaurant ----////////////////


exports.getAllRestaurant = (req, res) => {
  Restaurant.find({}).populate('restaurant_floors.floor')
  .populate({ path: "restaurant_floors.floor",
  model: "Floor",
  populate: {
    path: "tables",
    model: "Table",
  },})
  .then(foundRestaurant=>{
res.json({error:false,data:foundRestaurant})
  }).catch(err=>{
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })
}
exports.getRestaurantById = (req, res) => {
  Restaurant.findById(req.params.id).then(foundRestaurant=>{
res.json({error:false,data:"Successfully"})
  }).catch(err=>{
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })
}

/////////------ Super Admin Can Create Restaurant ----////////////////
exports.createRestaurant = (req, res) => {
  const { restaurant_name, cuisines, opening_timings, current_rating, thumbnail_images
    , restaurant_images, address, latitude, longitude, phone, menuList,restaurant_floors } = req.body;
  let coordinates = [latitude, longitude]
  let location = { type: "Point", coordinates: coordinates }
  const newRestaurant = new Restaurant({
    location: location,
    restaurant_floors:restaurant_floors,
    cuisines: cuisines,
    opening_timings: opening_timings,
    current_rating: current_rating,
    menuList: menuList,
    thumbnail_images: thumbnail_images,
    restaurant_images: restaurant_images,
    address: address,
    phone: phone,
    restaurant_name: restaurant_name
  })
  newRestaurant.save().then(found => {
 res.json({error:false,data:"Successfully"})
  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })
};
/////////------ Super Admin Edit Restaurant ----////////////////
exports.editRestaurant = (req, res) => {
  const { restaurant_name, cuisines, opening_timings, current_rating, thumbnail_images
    , restaurant_images, address, latitude, longitude, phone, menuList } = req.body;
  let coordinates = [latitude, longitude]
  let location = { type: "Point", coordinates: coordinates }
Restaurant.findByIdAndUpdate({
    location: location,
    cuisines: cuisines,
    opening_timings: opening_timings,
    current_rating: current_rating,
    menuList: menuList,
    thumbnail_images: thumbnail_images,
    restaurant_images: restaurant_images,
    address: address,
    phone: phone,
    restaurant_name: restaurant_name
  }).then(found => {
 res.json({error:false,data:"Updated"})
  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
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
//   res.json({error:false,data:found})
//    }).catch(err=>{
//      res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
//    })

// };