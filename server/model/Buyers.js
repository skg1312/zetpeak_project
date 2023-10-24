const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  companyName: String,
  companyAddress: String,
  companyGSTNo: String,
  stateName: String,
  stateCode: String,
});

module.exports = mongoose.model('Buyer', buyerSchema);
