const express = require('express');
const router = express.Router();
const Company = require('../model/Companys');

// Create a new company
router.post('/add', (req, res) => {
  const newCompany = new Company({
    particular: req.body.particular,
    country: req.body.country,
    State: req.body.State,
    'Registration type': req.body['Registration type'],
    'party type': req.body['party type'],
    'GST No': req.body['GST No'],
    contact: req.body.contact,
    'office address': req.body['office address'],
    pincode: req.body.pincode,
    // Add more fields as needed
  });

  newCompany.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all companies
router.get('/list', (req, res) => {
  Company.find()
    .then(companies => {
      res.status(200).json(companies);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a company by ID
router.put('/update/:id', (req, res) => {
  Company.findByIdAndUpdate(
    req.params.id,
    {
      particular: req.body.particular,
      country: req.body.country,
      State: req.body.State,
      'Registration type': req.body['Registration type'],
      'party type': req.body['party type'],
      'GST No': req.body['GST No'],
      contact: req.body.contact,
      'office address': req.body['office address'],
      pincode: req.body.pincode,
      // Update more fields as needed
    },
    { new: true }
  )
    .then(updatedCompany => {
      if (!updatedCompany) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.status(200).json(updatedCompany);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a company by ID
router.delete('/delete/:id', (req, res) => {
  Company.findByIdAndRemove(req.params.id)
    .then(deletedCompany => {
      if (!deletedCompany) {
        return res.status(404).json({ message: 'Company not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
