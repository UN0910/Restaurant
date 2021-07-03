var express = require('express');
var validate = require("validate.js");
var router = express.Router();
var adminAuthentication = require('../controller/authController');

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })
/* GET home page. */
router.post('/signup',adminAuthentication.Signup,err=>{
  console.log('error while signup user')
});
router.post('/signin',adminAuthentication.Signin,err=>{
  console.log('error while signup user')
});

router.route("/user/signup").post(upload.single("image"),adminAuthentication.userSignup);

router.route('/user/signin').post(adminAuthentication.userSignIn,err=>{
  console.log('error while signin user')
})

router.route('/forgot-password').post(adminAuthentication.forgotPassword);

router.get('/reset-password/:token', adminAuthentication.reset);

router.post('/reset-password/:token', adminAuthentication.resetPassword);

module.exports=router
