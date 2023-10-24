const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name: String,
  address: String,
  number: String,
  email: String,
  contact: String,
  // Add more fields as needed
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
