const express = require('express');
const router = express.Router();
const Seller = require('../model/sellers');

// Create a new seller
router.post('/add', (req, res) => {
  const newSeller = new Seller({
    companyName: req.body.companyName,
    companyAddress: req.body.companyAddress,
    companyGSTNo: req.body.companyGSTNo,
    stateName: req.body.stateName,
    stateCode: req.body.stateCode,
  });

  newSeller.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all sellers
router.get('/list', (req, res) => {
  Seller.find()
    .then(sellers => {
      res.status(200).json(sellers);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a seller by ID
router.put('/update/:id', (req, res) => {
  Seller.findByIdAndUpdate(
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
    .then(updatedSeller => {
      if (!updatedSeller) {
        return res.status(404).json({ message: 'Seller not found' });
      }
      res.status(200).json(updatedSeller);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a seller by ID
router.delete('/delete/:id', (req, res) => {
  Seller.findByIdAndRemove(req.params.id)
    .then(deletedSeller => {
      if (!deletedSeller) {
        return res.status(404).json({ message: 'Seller not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
