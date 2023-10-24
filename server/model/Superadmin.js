const mongoose = require('mongoose');

const superAdminSchema = mongoose.Schema({
  Name: String,
  Email: String,
  Password: String,
});

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

module.exports = SuperAdmin;
