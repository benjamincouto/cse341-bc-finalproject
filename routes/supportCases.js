const express = require('express');
const router = express.Router();

// Controller
const supportCasesController = require('../controllers/supportCasesController');

// Validation
const validation = require('../middleware/validate')

//Authentication
const { isAuthenticated } = require('../middleware/authenticate');

// Get all cases
router.get('/', supportCasesController.getAll);

// Get single case
router.get('/:id', supportCasesController.getSingle)

// Create support case
router.post('/', isAuthenticated, validation.saveSupportCase, supportCasesController.createSupportCase)

// Update support case
router.put('/:id', isAuthenticated, validation.saveSupportCase, supportCasesController.updateSupportCase)

// Delete support case
router.delete('/:id', isAuthenticated, supportCasesController.deleteSupportCase)

module.exports = router;