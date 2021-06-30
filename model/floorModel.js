const mongoose = require("mongoose");
const FloorSchema = new mongoose.Schema({ 
  floor_name:{
      type:String
  },
 tables:[
   {type: mongoose.Schema.Types.ObjectId,ref:'Table'}
 ]
});

const Floor = mongoose.model("Floor", FloorSchema);
module.exports = Floor;
