var express = require('express');
var router = express.Router();
var restaurantController=require('../controller/RestaurantController')
/* GET home page. */
router.post('/createRestaurant',restaurantController.createRestaurant,err=>{
  console.log('error while signup user')
})
// router.get('/getNearby',restaurantController.getNearby,err=>{
//     console.log('error while signup user')
//   })
  2


module.exports=router