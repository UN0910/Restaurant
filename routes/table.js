var express = require('express');
var router = express.Router();
var tableController=require('../controller/tableController')
const verifySuperAdmin=require('../middleware/verifySuperAdmin')

router.get('/get-tables',verifySuperAdmin,tableController.getAllTables,err=>{
  console.log('error while signup user')
})
router.post('/createTable',verifySuperAdmin,tableController.createTable,err=>{
    console.log('error while signup user')
  })
  router.put('/editTable/:id',verifySuperAdmin,tableController.editTable,err=>{
    console.log('error while signup user')
  })
  router.post('/changeTableStatus?',verifySuperAdmin,tableController.changeTableStatus,err=>{
    console.log('error while signup user')
  })
// router.get('/getNearby',restaurantController.getNearby,err=>{
//     console.log('error while signup user')
//   })
  


module.exports=router