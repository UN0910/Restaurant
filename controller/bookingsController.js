const User = require("../model/userModel");
const Booking = require("../model/bookings");
const Restaurant = require("../model/restaurantModel");
const Table = require("../model/tableModel");
const validate = require("validate.js");
const { Mongoose } = require("mongoose");

exports.CreateBooking =async (req,res)=>{
    const {userId,restaurant_id,table_id} = req.body;

    const __user = await User.findOne({_id : userId});
    const __restaurant = await Restaurant.findOne({_id : restaurant_id});
    const __table = await Table.findOne({_id : table_id});

    // console.log(__user,__restaurant, __table);

    if(!__user || !__restaurant || !__table){
        res.status(400).json({error : "Invalid user/restaurant/table credentials"});
        return console.log("Invalid UserId, RestaurantId, TableId");
    }

    let validation = validate(req.body, {
        email: {
          presence: true,
          email: true,
        },
        transactionId : {
            presence : true
        },
        userId : {
            presence : true
        },
        phone_number : {
            presence : true,
            length : {minimum: 10, maximum : 10, message : "Enter a valid phone number"}
        },
        restaurant_id : {
            presence : true
        },
        table_id : {
            presence : true
        },
        timeSlot : {
            presence : true
        },
        people : {
            presence : true
        },
        status : {
            presence : true
        }
      });

      if(validation){
          res.status(400).json({error : validation});
          return console.log(validation);
      }
        
      const booking = new Booking({ ...req.body });

      booking.save().then((result=>{
          res.status(200).json({message : "Booking Saved Successfully!"});
          console.log("Saved Successfully!");
      })).catch(err=>{
          res.status(400).json({error : err});
      });
}

exports.UpdateBooking = async(req,res)=>{
    const id = req.params.id;
    const {userId,restaurant_id,table_id} = req.body;

    if(req.body.userId || req.body.restaurant_id || req.body.table_id){
        const __user = await User.findOne({_id : userId});
        const __restaurant = await Restaurant.findOne({_id : restaurant_id});
        const __table = await Table.findOne({_id : table_id});

    // console.log(__user,__restaurant, __table);

        if(!__user || !__restaurant || !__table){
            res.status(400).json({error : "Invalid user/restaurant/table credentials"});
            return console.log("Invalid UserId, RestaurantId, TableId");
        }
}

    Booking.findOneAndUpdate({_id : id},req.body).then(result=>{
        res.status(200).json({message : "Booking Updated Successfully!"});
        return console.log(result);
    }).catch(err=>{
        res.status(400).json({error : err});
        return console.log(err);
    });
}

exports.DeleteBooking = (req,res)=>{
    const id = req.params.id;
    
    Booking.findOneAndRemove({_id : id}).then(result=>{
        res.status(200).json({message : "Booking Deleted!"});
        return console.log(result);
    }).catch(err=>{
        res.status(400).json({error : err});
    });
}

exports.ReadBooking = (req,res)=>{
    const id = req.params.id;

    Booking.findOne({_id : id}).then(result =>{
        if(result) {
            console.log(result);
            res.status(200).json({message : result});
        }
        else if(!result){
            console.log("No bookings user the given ID");
            res.status(400).json({message : "No bookings found!"});
        }
    }).catch(err=>{
        res.status(400).json({error : err});
    });
}