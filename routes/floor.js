var express = require('express');
var router = express.Router();
var floorController=require('../controller/floorController')

router.put('/editFloor/:id',floorController.editFloor,err=>{
  console.log('error while signup user')
})
router.post('/createFloor',floorController.createFloor,err=>{
    console.log('error while signup user')
  })
router.get('/getFloorById/:id',floorController.getFloorById,err=>{
    console.log('error while signup user')
  })
  router.get('/get-floors',floorController.getAllFloor,err=>{
    console.log('error while signup user')
  })
  router.put('/addTableToFloor/:floorId',floorController.addTableToFloor,err=>{
    console.log('error while signup user')
  })
  router.put('/removeTableToFloor/:floorId',floorController.RemoveTableFromFloor,err=>{
    console.log('error while signup user')
  })
  
  


module.exports=router