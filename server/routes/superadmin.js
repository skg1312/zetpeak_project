const express = require('express');
const router = express.Router();
const SuperAdmin = require('../model/Superadmin');

// Create a new superadmin (signup)
router.post('/add', (req, res) => {
  const newSuperAdmin = new SuperAdmin({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  newSuperAdmin.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all superadmins (superadmindet)
router.get('/superadmindet', (req, res) => {
  SuperAdmin.find()
    .then(superadmins => {
      res.status(200).json(superadmins);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a superadmin by ID (update)
router.put('/update/:id', (req, res) => {
  SuperAdmin.findByIdAndUpdate(
    req.params.id,
    {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
    },
    { new: true }
  )
    .then(updatedSuperAdmin => {
      if (!updatedSuperAdmin) {
        return res.status(404).json({ message: 'SuperAdmin not found' });
      }
      res.status(200).json(updatedSuperAdmin);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a superadmin by ID (delete)
router.delete('/delete/:id', (req, res) => {
  SuperAdmin.findByIdAndRemove(req.params.id)
    .then(deletedSuperAdmin => {
      if (!deletedSuperAdmin) {
        return res.status(404).json({ message: 'SuperAdmin not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
