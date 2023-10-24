const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  particular: String,
  country: String,
  State: String,
  'Registration type': String,
  'party type': String,
  'GST No': String,
  contact: String,
  'office address': String,
  pincode: String,
  // Add more fields as needed
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
