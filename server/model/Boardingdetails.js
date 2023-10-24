// /model/boardingdetails.js

const mongoose = require('mongoose');

const boardingDetailsSchema = new mongoose.Schema({
  weight: String,
  transportationCost: String,
  date: Date,
  time: String,
  driverName: String,
  driverNumber: String,
  driverAddress: String,
  watermark: String,
  whatsapp: String,
});

const BoardingDetails = mongoose.model('BoardingDetails', boardingDetailsSchema);

module.exports = BoardingDetails;
