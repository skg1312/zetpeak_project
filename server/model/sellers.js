const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  companyName: String,
  companyAddress: String,
  companyGSTNo: String,
  stateName: String,
  stateCode: String,
});

module.exports = mongoose.model('Seller', sellerSchema);
