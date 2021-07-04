const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeSlots = new Schema(
  {
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    available: { type: Boolean },
    bookedFor: { type: Date, default: Date.now() },
    paid: { type: Boolean, default: false },
    duration: { type: String },
    booked: { type: Boolean, default: false },
    approved: { type: Boolean, default: false },
    amount: { type: String },
  },
  { timestamps: true }
);



module.exports = mongoose.model("timeSlots", timeSlots);
