const mongoose = require("mongoose");
const FloorSchema = new mongoose.Schema({ 
 floorName:{
      type:String
  },
 tables:{
      type:Array
  }
});

const Floor = mongoose.model("Floor", FloorSchema);
module.exports = Floor;
