const Loyalty = require("../model/pointsModel");
const User = require("../model/userModel");
const express = require("express");


exports.getpoints = (req,res)=>{
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


exports.points = (req,res)=>{
    const _id = req.body._id;
    const points = parseInt(req.body.points);
    const type = (req.body.type).toLowerCase();

    User.findOne({_id: _id}, (err, result)=>{
        if(err){
            res.status(400).json({error :err});
        }else if(!result){
            res.status(200).json({message: "User not found!"});
        }else{
            Loyalty.findOne({_id: result._id}, (err, result)=>{
                if(err){
                    res.status(400).json({error :err});
                }else if(!result){
                    const loyalty = new Loyalty({
                        customer: _id,
                        type: type,
                        points: points,
                        openingBalance: 0,
                        closingBalance: points,
                        date: Date.now()
                    })
                    loyalty.save((err, result)=>{
                        if(!err){
                            res.status(200).json({message: result});
                        }
                    })
                }
                else if(result){
                            var openingBalance, closingBalance;
                            openingBalance = result.closingBalance;

                            if(type === "credit"){
                                closingBalance = result.openingBalance + points;
                            }else if(type === "debit"){
                                closingBalance = Math.abs(result.openingBalance - points);
                            }else{
                                closingBalance = result.openingBalance;
                            }

                            console.log(closingBalance , openingBalance);
                            const loyalty = new Loyalty({
                                customer: _id,
                                type: type,
                                points: points,
                                openingBalance: openingBalance,
                                closingBalance: closingBalance,
                                date: Date.now()
                            });
                            loyalty.save((err, result)=>{
                                if(!err){
                                    res.status(200).json({message: result});
                                }
                            })
                }
            })
        }
    })
}