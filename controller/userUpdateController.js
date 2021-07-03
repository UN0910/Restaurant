const express= require("express");
const User = require("../model/userModel");
const validate = require("validate.js");

updateUser=(req,res)=>{

  console.log("Updating user details");
    const {email, password, phone, name, dob, profile_img} = req.body;

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
          console.log(req.body);
      }
};

module.exports = updateUser;