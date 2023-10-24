// /router/boardingdetails.js

const express = require('express');
const router = express.Router();
const BoardingDetails = require('../model/Boardingdetails');

// Create a new boarding detail
router.post('/add', (req, res) => {
  const newBoardingDetail = new BoardingDetails(req.body);
  newBoardingDetail.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all boarding details
router.get('/list', (req, res) => {
  BoardingDetails.find()
    .then(boardingDetails => {
      res.status(200).json(boardingDetails);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Update a boarding detail by ID
router.put('/update/:id', (req, res) => {
  BoardingDetails.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then(updatedBoardingDetail => {
      if (!updatedBoardingDetail) {
        return res.status(404).json({ message: 'Boarding Detail not found' });
      }
      res.status(200).json(updatedBoardingDetail);
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Delete a boarding detail by ID
router.delete('/delete/:id', (req, res) => {
  BoardingDetails.findByIdAndRemove(req.params.id)
    .then(deletedBoardingDetail => {
      if (!deletedBoardingDetail) {
        return res.status(404).json({ message: 'Boarding Detail not found' });
      }
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
