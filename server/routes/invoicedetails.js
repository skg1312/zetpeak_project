const express = require('express');
const router = express.Router();
const InvoiceDetails = require('../model/Invoicedetails');

// Create new invoice details
router.post('/add', (req, res) => {
  const {
    invoiceNo,
    eWayNo,
    invoiceDated,
    deliveryNote,
    modeOfPayment,
    supplierRef,
    otherReferences,
    buyersOrderNo,
    orderedDated,
    dispatchedDocumentNo,
    deliveryNoteDate,
    dispatchedThrough,
    destination,
    billOfLanding,
    motorVehicleNo,
    termsOfDelivery
  } = req.body;

  const newInvoiceDetails = new InvoiceDetails({
    invoiceNo,
    eWayNo,
    invoiceDated,
    deliveryNote,
    modeOfPayment,
    supplierRef,
    otherReferences,
    buyersOrderNo,
    orderedDated,
    dispatchedDocumentNo,
    deliveryNoteDate,
    dispatchedThrough,
    destination,
    billOfLanding,
    motorVehicleNo,
    termsOfDelivery
  });

  newInvoiceDetails.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all invoice details
router.get('/list', (req, res) => {
  InvoiceDetails.find()
    .then(invoiceDetails => {
      res.status(200).json(invoiceDetails);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update invoice details by ID
router.put('/update/:id', (req, res) => {
  const {
    invoiceNo,
    eWayNo,
    invoiceDated,
    deliveryNote,
    modeOfPayment,
    supplierRef,
    otherReferences,
    buyersOrderNo,
    orderedDated,
    dispatchedDocumentNo,
    deliveryNoteDate,
    dispatchedThrough,
    destination,
    billOfLanding,
    motorVehicleNo,
    termsOfDelivery
  } = req.body;

  InvoiceDetails.findByIdAndUpdate(
    req.params.id,
    {
      invoiceNo,
      eWayNo,
      invoiceDated,
      deliveryNote,
      modeOfPayment,
      supplierRef,
      otherReferences,
      buyersOrderNo,
      orderedDated,
      dispatchedDocumentNo,
      deliveryNoteDate,
      dispatchedThrough,
      destination,
      billOfLanding,
      motorVehicleNo,
      termsOfDelivery
    },
    { new: true }
  )
    .then(updatedInvoiceDetails => {
      if (!updatedInvoiceDetails) {
        return res.status(404).json({ message: 'Invoice details not found' });
      }
      res.status(200).json(updatedInvoiceDetails);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete invoice details by ID
router.delete('/delete/:id', (req, res) => {
  InvoiceDetails.findByIdAndRemove(req.params.id)
    .then(deletedInvoiceDetails => {
      if (!deletedInvoiceDetails) {
        return res.status(404).json({ message: 'Invoice details not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
