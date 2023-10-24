const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
  Access: String,
  IdProof: String,
  OfficeBranch: String,
  Number: String,
  // You can add more fields as needed
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
