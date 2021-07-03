var express = require('express');
var validate = require("validate.js");
var router = express.Router();
var adminAuthentication = require('../controller/authController');

/* GET home page. */
router.post('/signup',adminAuthentication.Signup,err=>{
  console.log('error while signup user')
});
router.post('/signin',adminAuthentication.Signin,err=>{
  console.log('error while signup user')
});

router.route("/user/signup").post(adminAuthentication.userSignup,err=>{
  console.log("error in Registering User");
});

router.route('/user/signin').post(adminAuthentication.userSignIn,err=>{
  console.log('error while signin user')
});

router.route('/forgot-password').post(adminAuthentication.forgotPassword);

router.get('/reset-password/:token', adminAuthentication.reset);

router.post('/reset-password/:token', adminAuthentication.resetPassword);

module.exports=router
