const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
require('dotenv').config();
const dbURI = process.env.DBURI;
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Import and use your routers
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/superadmin');
const staffRouter = require('./routes/staff');
const companyRouter = require('./routes/companies');
const customerRouter = require('./routes/customer');
const consignmentRouter = require('./routes/consignment');
const sellerRouter = require('./routes/sellers');
const buyersRouter = require('./routes/buyers');
const invoicedetailsRouter = require('./routes/invoicedetails');
const boardingdetailsRouter = require('./routes/boardingdetails');

// Define the routes for your routers
app.use('/staff', staffRouter);
app.use('/superadmin', adminRouter);
app.use('/users', usersRouter);
app.use('/companies', companyRouter);
app.use('/customers', customerRouter);
app.use('/consignments', consignmentRouter);
app.use('/sellers', sellerRouter);
app.use('/buyers', buyersRouter);
app.use('/invoicedetails', invoicedetailsRouter);
app.use('/boardingdetails', boardingdetailsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
