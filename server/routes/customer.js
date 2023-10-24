const express = require('express');
const router = express.Router();
const Customer = require('../model/Customers');

// Create a new customer
router.post('/add', (req, res) => {
  const newCustomer = new Customer({
    name: req.body.name,
    address: req.body.address,
    number: req.body.number,
    email: req.body.email,
    contact: req.body.contact,
    // Add more fields as needed
  });

  newCustomer.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all customers
router.get('/list', (req, res) => {
  Customer.find()
    .then(customers => {
      res.status(200).json(customers);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a customer by ID
router.put('/update/:id', (req, res) => {
  Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      address: req.body.address,
      number: req.body.number,
      email: req.body.email,
      GST: req.body.GST,
      contact: req.body.contact,
      // Update more fields as needed
    },
    { new: true }
  )
    .then(updatedCustomer => {
      if (!updatedCustomer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      res.status(200).json(updatedCustomer);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a customer by ID
router.delete('/delete/:id', (req, res) => {
  Customer.findByIdAndRemove(req.params.id)
    .then(deletedCustomer => {
      if (!deletedCustomer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
