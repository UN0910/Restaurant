var express = require('express');
var router = express.Router();
var floorController=require('../controller/floorController')

router.put('/editFloor/:id',floorController.editFloor,err=>{
  console.log('error while signup user')
})
router.post('/createTable',floorController.createFloor,err=>{
    console.log('error while signup user')
  })
// router.get('/getNearby',restaurantController.getNearby,err=>{
//     console.log('error while signup user')
//   })
  


module.exports=router