const express = require('express');
const router = express.Router();
const User = require('../model/Users');

// Create a new user (signup)
router.post('/signup', (req, res) => {
  const newUser = new User({
    Name: req.body.Name,
    Email: req.body.Email,
    Password: req.body.Password,
  });
  newUser.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});
// Get all users (userdet)
router.get('/userdet', (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a user by ID (update)
router.put('/update/:id', (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
    },
    { new: true }
  )
    .then(updatedUser => {
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a user by ID (delete)
router.delete('/delete/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(deletedUser => {
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
