var express = require('express');
var router = express.Router();
var restaurantController=require('../controller/RestaurantController')

router.get('/get-all-restaurants',restaurantController.getAllRestaurant,err=>{
  console.log('error while signup user')
})
router.get('/getRestaurantById/:id',restaurantController.getRestaurantById,err=>{
  console.log('error while signup user')
})
router.post('/createRestaurant',restaurantController.createRestaurant,err=>{
  console.log('error while signup user')
})
router.put('/addFloorToRestaurant/:restaurantId',restaurantController.addFloorToRestaurant,err=>{
  console.log('error while signup user')
})
router.put('/removeFloorFromRestaurant/:restaurantId',restaurantController.RemoveFloorFromRestaurant,err=>{
  console.log('error while signup user')
})

// router.get('/getNearby',restaurantController.getNearby,err=>{
//     console.log('error while signup user')
//   })
  


module.exports=router