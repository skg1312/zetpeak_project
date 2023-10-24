const mongoose = require('mongoose');

const consignmentSchema = new mongoose.Schema({
  itemDetails: String,
  itemQuantity: String,
  itemHSN: String,
  itemQuantityKg: String,
  itemAmount: String,
  itemRate: String,
});

module.exports = mongoose.model('Consignment', consignmentSchema);
