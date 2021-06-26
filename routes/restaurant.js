var express = require('express');
var router = express.Router();
var restaurantController=require('../controller/RestaurantController')

router.post('/createRestaurant',restaurantController.createRestaurant,err=>{
  console.log('error while signup user')
})
router.post('/createTable',restaurantController.createTable,err=>{
    console.log('error while signup user')
  })
// router.get('/getNearby',restaurantController.getNearby,err=>{
//     console.log('error while signup user')
//   })
  


module.exports=router