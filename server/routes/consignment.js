const express = require('express');
const router = express.Router();
const Consignment = require('../model/Consignments');

// Create a new consignment
router.post('/add', (req, res) => {
  const newConsignment = new Consignment({
    itemDetails: req.body.itemDetails,
    itemQuantity: req.body.itemQuantity,
    itemHSN: req.body.itemHSN,
    itemQuantityKg: req.body.itemQuantityKg,
    itemAmount: req.body.itemAmount,
    itemRate: req.body.itemRate,
  });

  newConsignment.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all consignments
router.get('/list', (req, res) => {
  Consignment.find()
    .then(consignments => {
      res.status(200).json(consignments);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a consignment by ID
router.put('/update/:id', (req, res) => {
  Consignment.findByIdAndUpdate(
    req.params.id,
    {
      itemDetails: req.body.itemDetails,
      itemQuantity: req.body.itemQuantity,
      itemHSN: req.body.itemHSN,
      itemQuantityKg: req.body.itemQuantityKg,
      itemAmount: req.body.itemAmount,
      itemRate: req.body.itemRate,
    },
    { new: true }
  )
    .then(updatedConsignment => {
      if (!updatedConsignment) {
        return res.status(404).json({ message: 'Consignment not found' });
      }
      res.status(200).json(updatedConsignment);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a consignment by ID
router.delete('/delete/:id', (req, res) => {
  Consignment.findByIdAndRemove(req.params.id)
    .then(deletedConsignment => {
      if (!deletedConsignment) {
        return res.status(404).json({ message: 'Consignment not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
