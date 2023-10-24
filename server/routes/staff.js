const express = require('express');
const router = express.Router();
const Staff = require('../model/Staffs');

// Create a new staff member
router.post('/add', (req, res) => {
  const newStaff = new Staff({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
    Access: req.body.Access,
    IdProof: req.body.IdProof,
    OfficeBranch: req.body.OfficeBranch,
    Number: req.body.Number,
    // Add more fields as needed
  });

  newStaff.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all staff members
router.get('/list', (req, res) => {
  Staff.find()
    .then(staff => {
      res.status(200).json(staff);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a staff member by ID
router.put('/update/:id', (req, res) => {
  Staff.findByIdAndUpdate(
    req.params.id,
    {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
      Access: req.body.Access,
      IdProof: req.body.IdProof,
      OfficeBranch: req.body.OfficeBranch,
      Number: req.body.Number,
      // Update more fields as needed
    },
    { new: true }
  )
    .then(updatedStaff => {
      if (!updatedStaff) {
        return res.status(404).json({ message: 'Staff member not found' });
      }
      res.status(200).json(updatedStaff);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a staff member by ID
router.delete('/delete/:id', (req, res) => {
  Staff.findByIdAndRemove(req.params.id)
    .then(deletedStaff => {
      if (!deletedStaff) {
        return res.status(404).json({ message: 'Staff member not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
