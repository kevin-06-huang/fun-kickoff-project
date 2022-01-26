const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//payment?
const profileSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    unique: false
  },
  last_name: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profilePic: {
    type: Image,
    default: ''
  },
  availability: {
    type: [{type: Schema.Types.ObjectId, ref:'Appointment'}],
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", profileSchema);
