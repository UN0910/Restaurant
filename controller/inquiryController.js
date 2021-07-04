const Messages = require("../model/messagemodel");
const Inquiry =  require("../model/inquirymodel");
const User = require("../model/userModel");
const express = require("express");
const { log } = require("debug");

exports.insertInquiry = (req,res)=>{
    const content = req.body.content;
    const creator = req.body.creator;
    const resolver = req.body.resolver;
    const _id = req.body._id; //this is the id of the user making an inquiry

    const message = new Messages({
        content : content,
        creator : creator,
        dateTime : Date.now()
    });

    message.save((err,result)=>{
        if(err){
            console.log("Error in saving data to message : "+err);
            res.status(400).json({error : err});
            return console.log(err);
        }else{
            Inquiry.findOneAndUpdate(
                {customer : _id},
                {
                    customer : _id,
                    resolver : resolver,
                    $push : {messages : result._id}
                },
                {upsert:true,new:true},(err,inquiryResult)=>{
                    if(err){
                        console.log("Error in saving data to Inquiry "+err);
                        res.status(400).json({error : err});
                    }else{
                        console.log(inquiryResult);
                        User.findOneAndUpdate({_id : _id},{inquiries:inquiryResult._id},(err,userResult)=>{
                            if(err){
                                res.staus(400).json({error:err});
                                return console.log("Error in saving data to user "+err);
                            }else if(!userResult){
                                res.status(400).json({error : "User not found"});
                                return console.log("User not found");
                            }else{
                                // console.log(userResult);
                                res.status(200).json({message : "Inquiry Saved!"});
                            }
                        });
                    }
                })
        }
    });
}

exports.getInquiry = (req,res)=>{
    const _id = req.params.id;

    Inquiry.findOne({customer : _id},(err,result)=>{
        if(err){
            res.status(400).json({error : err});
        }else if(!result){
            res.status(200).json({message : "No Inquiries till now"});
        }else{
            // console.log(result);
            res.status(200).json({message : result.messages});
        }
    });
}