const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
var validate = require("validate.js");
const superAdminModel=require('../model/superAdminModel')
const User = require("../model/userModel");

 


/////////------ User SignUp ----////////////////

exports.Signup = (req, res) => {
  const {  email, password} = req.body;
 // const mobileNumber = req.body.mobileNumber ? req.body.mobileNumber : null;
  /**  name:string, 
    mobileNumber:number,
    password:string,
   */
  // validation
  let validation = validate(req.body, {
    
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
      length: { minimum: 6, message: "password must be 8 characters long" },
    },
  });
  if (validation) {
    res.status(400).json({ error: validation });
    return console.log(validation);
  } else {
    superAdminModel.findOne({ email: email }).then((user) => {
      if (user) {
        res.status(404).json({ error: "email Address is already taken" });
      } else {
        bcryptjs.hash(password, 12).then((hashedpassword) => {
          let newStudent = new superAdminModel({
            email: email,
            password: hashedpassword,
      
          });
        //  console.log('done');
          newStudent
            .save()
            .then((user) => {
             // console.log(user);
              const token = jwt.sign(
                { secretId: user.uId },
                process.env.JWT_SECRET
              );
              res.json({
                message: "signUp successfully",
              });
            })
            .catch((err) => {
              //   console.log(err.message)
              res.status(404).json({ error: err.message });
            });
        });
      }
    });
  }
};
/////////------ User SignIn ----////////////////
exports.Signin = (req, res) => {
  const { email, password } = req.body;
  let validation = validate(req.body, {
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
    },
  });

  if (validation) {
    res.status(400).json({ error: validation });
    return console.log(validation);
  } else {
    superAdminModel.findOne({ email: email }).then((user) => {
      if (user) {
        // console.log(password,user.password)
        bcryptjs
          .compare(password, user.password)
          .then((ifSame) => {
            //if user is normal user
            if (ifSame) {
              let md5 = require("md5");
              let userId = md5(user._id);
              const token = jwt.sign(
                { secretId: userId },
                process.env.JWT_SECRET
              );
              res.json({
                message: "SignSuccess",
                token: token,
                email: user.email,
                name: user.name,
              });
            } else {
              res.status(400).json({ error: "Invalid password" });
            }
          })
          .catch((err) => {
            console.log("error in comparing password", err);
          });
      } else {
        res
          .status(404)
          .json({ error: "User not found of " + email + " address" });
      }
    });
  }
};


/* User signup....... */

exports.userSignup = (req,res)=>{

  const email = req.body.email;
  const password = req.body.password;
  const phone = req.body.phone;
  const dob = req.body.dob;
  const name = req.body.name;
  let profile_img;

  let validation = validate(req.body,{
    email : {
      presence : true,
      email : true
    },
    password : {
      presence : true,
      length : {minimum: 6, message : "Password must be 8 characters long"}
    },
    phone : {
      presence : true,
      length : {minimum: 10, maximum : 10, message : "Enter a valid phone number"}
    },
    dob : {
      presence : true
    },
    profile_img : {
      presence : true
    },
    name :{
      presence : true
    }
  });

  if(validation){
    res.status(400).json({error : validation});
    return console.log(validation);
  }else{
    User.findOne({email : email},(err,result)=>{
      if(err){
        res.status(400).json({error : "Error is db"});
        return console.log("Error in finding the user");
      } else if(result){
        res.status(400).json({error : "Email is already in use!"});
        return console.log("Email already in use");
      }else{
        profile_img = req.file.filename;

        bcryptjs.hash(password,12,(err,hash)=>{
          if(!err){
            const user = new User({
              email : email,
              password : hash,
              phone : phone,
              dob : dob,
              profile_img : profile_img,
              name : name
            });
          }

          user.save((err)=>{
            if(err){
              console.log(err);
              res.status(400).json({error : "Error while saving user data!"});
            }else{
              const token = jwt.sign(
                { secretId: user.email },
                process.env.JWT_SECRET
              );
              res.status(200).json({
                message: "SignSuccess",
                token: token,
                email: user.email,
                name: user.name,
              });
            }
          });
        });
      }
    });
  }
};

/////////------ User SignIn 2 ----////////////////
exports.userSignIn = (req, res) => {
  const { email, password } = req.body;
  let validation = validate(req.body, {
    email: {
      presence: true,
      email: true,
    },
    password: {
      presence: true,
    },
  });

  if (validation) {
    res.status(400).json({ error: validation });
    return console.log(validation);
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        // console.log(password,user.password)
        bcryptjs
          .compare(password, user.password)
          .then((ifSame) => {
            //if user is normal user
            if (ifSame) {
              let md5 = require("md5");
              let userId = md5(user._id);
              const token = jwt.sign(
                { secretId: userId },
                process.env.JWT_SECRET
              );
              res.json({
                message: "SignSuccess",
                token: token,
                email: user.email,
                name: user.name,
              });
            } else {
              res.status(400).json({ error: "Invalid password" });
            }
          })
          .catch((err) => {
            console.log("error in comparing password", err);
          });
      } else {
        res
          .status(404)
          .json({ error: "User not found of " + email + " address" });
      }
    });
  }
};
