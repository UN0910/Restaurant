var express = require('express');
var router = express.Router();
var tableController=require('../controller/tableController')

r
router.post('/createTable',tableController.createTable,err=>{
    console.log('error while signup user')
  })
// router.get('/getNearby',restaurantController.getNearby,err=>{
//     console.log('error while signup user')
//   })
  


module.exports=router