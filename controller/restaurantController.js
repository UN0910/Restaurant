const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
var validate = require("validate.js");
const superAdminModel = require('../model/superAdminModel');
const Restaurant = require("../model/restaurantModel");
const Table = require("../model/TableModel");
const Floor = require("../model/floorModel");




/////////------ Super Admin Can Create Restaurant ----////////////////
exports.createRestaurant = (req, res) => {
  const { restaurant_name, cuisines, opening_timings, current_rating, thumbnail_images
    , restaurant_images, address, latitude, longitude, phone, menu } = req.body;
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
 res.json({error:false,data:"Successfully"})
  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })
};
/////////------ Super Admin Edit Restaurant ----////////////////

exports.editRestaurant = (req, res) => {
  const { restaurant_name, cuisines, opening_timings, current_rating, thumbnail_images
    , restaurant_images, address, latitude, longitude, phone, menu } = req.body;
  let coordinates = [latitude, longitude]
  let location = { type: "Point", coordinates: coordinates }
Restaurant.findByIdAndUpdate({
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
  }).then(found => {
 res.json({error:false,data:"Updated"})
  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })
};
exports.createTable=(req,res)=>{
  const { capacity,mergeable,current_status } = req.body;
  let newTable=new Table({
    capacity:capacity,mergeable:mergeable,current_status:current_status
  })
  newTable.save().then(found => {
 res.json({error:false,data:"Successfully"})
  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })

}
exports.createFloor=(req,res)=>{
  const { floor_name,tables } = req.body;
  let newFloor=new Floor({
    floor_name:floor_name,tables:tables
  })
  newFloor.save().then(found => {
 res.json({error:false,data:"Successfully"})
  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })

}
exports.editFloor=(req,res)=>{
  const { floor_name,tables } = req.body;
  Floor.findByIdAndUpdate(req.params.id,{
    floor_name:floor_name,tables:tables
  }).then(found => {
 res.json({error:false,data:"Updated"})
  }).catch(err => {
    res.status(503).json({error:true,data:'Something went wrong with db',errMsg:err})
  })

}
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