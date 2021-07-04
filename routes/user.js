var express = require('express');
var validate = require("validate.js");
var router = express.Router();
var UserController = require('../controller/UserController');

/* GET home page. */
router.post('/register', UserController.register, err => {
  console.log('error while signup user')
});
router.post('/login', UserController.login, err => {
  console.log('error while signup user')
});

router.post('/forgot-password', UserController.forgotPassword);

router.get('/reset-password/:token', UserController.reset);

router.post('/reset-password/:token', UserController.resetPassword);

router.post('/update-user-profile', UserController.updateUser);

router.delete('/delete/:id', UserController.DeleteUser);

router.get('/get-user-reservations/:id', UserController.GetReservations);

router.put('/add-restaurant-to-favorites/:user/:restaurant', UserController.AddToFavorite);

router.get('/get-user-enquiries/:user', UserController.AddToFavorite);



module.exports = router
