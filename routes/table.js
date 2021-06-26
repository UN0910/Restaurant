var express = require('express');
var router = express.Router();
var tableController=require('../controller/tableController')


router.post('/createTable',tableController.createTable,err=>{
    console.log('error while signup user')
  })
  router.put('/editTable',tableController.editTable,err=>{
    console.log('error while signup user')
  })
  router.post('/changeTableStatus?',tableController.changeTableStatus,err=>{
    console.log('error while signup user')
  })
// router.get('/getNearby',restaurantController.getNearby,err=>{
//     console.log('error while signup user')
//   })
  


module.exports=router