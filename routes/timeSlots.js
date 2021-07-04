var express = require('express');
var router = express.Router();
var timeSlotController = require('../controller/timeSlot.controller')

router.post('/generate-table-availability', timeSlotController.generateTimeSlots, err => {
  console.log('error while signup user')
})
router.post('/get-table-availability', timeSlotController.getSlots, err => {
  console.log('error while signup user')
})

module.exports = router