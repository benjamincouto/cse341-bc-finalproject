const express = require('express');
const router = express.Router();

// Controller
const sentimentsController = require('../controllers/sentimentsController');

// Validation
const validation = require('../middleware/validate');

//Authentication
const { isAuthenticated } = require('../middleware/authenticate');

// Get all cases
router.get('/', sentimentsController .getAll);

// Get single sentiment
router.get('/:id', sentimentsController.getSingle);

// Create sentiment
router.post('/', isAuthenticated, validation.saveSentiment, sentimentsController.createSentiment);

// Update sentiment
router.put('/:id', isAuthenticated, validation.saveSentiment, sentimentsController.updateSentiment);

// Delete sentiment
router.delete('/:id', isAuthenticated, sentimentsController.deleteSentiment);


module.exports = router;