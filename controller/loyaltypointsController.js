const Loyalty = require("../model/loyaltyPointsModel");
const User = require("../model/userModel");
const express = require("express");


exports.getLoyaltyPoints = (req,res)=>{
    const _id = req.params.id;

    Loyalty.findOne({customer : _id},(err,result)=>{
        if(err){
            res.status(400).json({error : err})
            return console.log(err);
        }else if(!result){
            res.status(200).json({message : "Please visit us to get loyalty points"});
        }else{
            res.status(200).json({message : result});
        }
    });
}


exports.LoyaltyPoints = (req,res)=>{
    
}