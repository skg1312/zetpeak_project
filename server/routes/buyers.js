const express = require('express');
const router = express.Router();
const Buyer = require('../model/Buyers');

// Create a new buyer
router.post('/add', (req, res) => {
  const newBuyer = new Buyer({
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    companyGSTNo: req.body.companyGSTNo,
    stateName: req.body.stateName,
    stateCode: req.body.stateCode,
  });

  newBuyer.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all buyers
router.get('/list', (req, res) => {
  Buyer.find()
    .then(buyers => {
      res.status(200).json(buyers);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a buyer by ID
router.put('/update/:id', (req, res) => {
  Buyer.findByIdAndUpdate(
    req.params.id,
    {
      companyName: req.body.companyName,
      companyAddress: req.body.companyAddress,
      companyGSTNo: req.body.companyGSTNo,
      stateName: req.body.stateName,
      stateCode: req.body.stateCode,
    },
    { new: true }
  )
    .then(updatedBuyer => {
      if (!updatedBuyer) {
        return res.status(404).json({ message: 'Buyer not found' });
      }
      res.status(200).json(updatedBuyer);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a buyer by ID
router.delete('/delete/:id', (req, res) => {
  Buyer.findByIdAndRemove(req.params.id)
    .then(deletedBuyer => {
      if (!deletedBuyer) {
        return res.status(404).json({ message: 'Buyer not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
