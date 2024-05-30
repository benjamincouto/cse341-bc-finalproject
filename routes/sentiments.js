const express = require('express');
const router = express.Router();

// Controller
const sentimentsController = require('../controllers/sentimentsController');

// Validation
const validation = require('../middleware/validate');

// Get all cases
router.get('/', sentimentsController .getAll);

// Get single sentiment
router.get('/:id', sentimentsController.getSingle);

// Create sentiment
router.post('/', validation.saveSentiment, sentimentsController.createSentiment);

// Update sentiment
router.put('/:id', validation.saveSentiment, sentimentsController.updateSentiment);

// Delete sentiment
router.delete('/:id', sentimentsController.deleteSentiment);


module.exports = router;