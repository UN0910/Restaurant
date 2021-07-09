const validate = require("validate.js");
const User = require("../model/userModel");
const Review = require("../model/review_Model");
const mongoose  = require("mongoose");


exports.submitReview = (req,res)=>{
    const {userId} = req.body;
    
    let validation = validate(req.body,{
        userId : {
            presence : true
        },
        rating : {
            presence : true,
        },
        content : {
            presence : true
        }
    });

    if(validation){
        res.status(400).json({error : validation});
        return console.log(validation);
    }

    const review = new Review({...req.body});
    review.save().then(result=>{
        User.findOneAndUpdate({_id : userId},{$push : {reviews : result._id}}).then(result=>{
            console.log(result.reviews);
        }).catch(err=>{
            res.status(400).json({error : err});
            return console.log(err);
        });
        res.status(200).json({message : "Review submitted Successfully"});
        return console.log(result);
    }).catch(err=>{
        res.status(400).json({error : err});
        return console.log(err);
    });
}

exports.updateReview = (req,res)=>{
    const {reviewId} = req.body;

    Review.findOneAndUpdate({_id : reviewId},req.body,{new : true}).then(result=>{
        res.status(200).json({message : "Review Updated Successfully!"});
        return console.log(result);
    }).catch(err=>{
        res.status(400).json({error : err});
        return console.log(err);
    })
}

exports.getReview = (req,res)=>{
    const reviewId = req.params.id;

    Review.findOne({_id : reviewId}).then(result=>{
        res.status(200).json({message : result});
    }).catch(err=>{
        res.status(400).json({error : err});
    })
}

exports.deleteReview = (req,res)=>{
    const reviewId = req.params.id;

    Review.findOneAndRemove({_id : reviewId}).then(result=>{
        res.status(200).json({message : "Review Deleted!"});
        return console.log(result);
    }).catch(err=>{
        res.status(400).json({error : err});
        return console.log(err);
    })
}