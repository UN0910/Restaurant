const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema({

  capacity: {
    type: Number,
  },
  mergeable: {
    type: Boolean,
  },
  currentStatus:{
      type:String
  },
  upcomingslots:{
      type:Array
  }
});

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;
