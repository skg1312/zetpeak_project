const mongoose = require('mongoose');

const invoiceDetailsSchema = new mongoose.Schema({
  invoiceNo: String,
  eWayNo: String,
  invoiceDated: Date,
  deliveryNote: String,
  modeOfPayment: String,
  supplierRef: String,
  otherReferences: String,
  buyersOrderNo: String,
  orderedDated: Date,
  dispatchedDocumentNo: String,
  deliveryNoteDate: Date,
  dispatchedThrough: String,
  destination: String,
  billOfLanding: String,
  motorVehicleNo: String,
  termsOfDelivery: String,
});

module.exports = mongoose.model('InvoiceDetails', invoiceDetailsSchema);
