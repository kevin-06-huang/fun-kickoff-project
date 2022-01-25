const mongoose = require("mongoose");

//TABLE [Appointment]
//- [Email] String
//- [StartTime] Date
//- [EndTime] Date
//- [IsRecurring] Bool
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false
  },
  email: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: false,
    unique: false
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

module.exports = Appointment = mongoose.model("appointment", appointmentSchema);
