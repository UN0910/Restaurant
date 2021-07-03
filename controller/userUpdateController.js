const express= require("express");
const User = require("../model/userModel");
const validate = require("validate.js");
const bcryptjs = require("bcryptjs");
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now()+path.extname(file.originalname));
  }
})

var upload = multer({ 
  storage: storage,
  fileFilter : function(req, file, cb){
    checkFileType(file,cb);
  }
}).single('image');

function checkFileType(file,cb){
  // Allowed extensions
  const fileTypes = /jpeg|jpg|png/;

  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  //Checking mimeType
  const mimeType = fileTypes.test(file.mimetype);

  if(mimeType && extName){
    return cb(null,true);
  }else{
    cb("Error : Images only");
  }
}

updateUser=(req,res)=>{

  upload(req,res,(err)=>{
    if(err){
      res.status(400).send({error : err});
    }else{
      console.log("Updating user details");
    let {_id, email, password, phone, name, dob} = req.body;
    let profile_img;

    if(req.file === undefined){
      profile_img = ""
    }else{
      profile_img==req.file.filename;
    }

    if(password){
      bcryptjs.hash(password, 12).then((hashedpassword)=>{
       req.body.password = hashedpassword;
      });
    }


    User.findOneAndUpdate({_id : _id},req.body,(err,result)=>{
      if(err){
        res.status(400).json({error:"db error try again later"});
      }else if(!result){
        res.status(400).json({error : "_id not found!"});
      }else{
        console.log("Update Successfully!");
        res.status(200).json({message : "Updated Successfully!"});
      }
    });
    }
  });

  
};

module.exports = updateUser;