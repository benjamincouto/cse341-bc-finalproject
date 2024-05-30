const express = require('express');
const router = express.Router();

// Controller
const supportCasesController = require('../controllers/supportCasesController');

// Validation
const validation = require('../middleware/validate')

// Get all cases
router.get('/', supportCasesController.getAll);

// Get single case
router.get('/:id', supportCasesController.getSingle)

// Create support case
router.post('/', validation.saveSupportCase, supportCasesController.createSupportCase)

// Update support case
router.put('/:id', validation.saveSupportCase, supportCasesController.updateSupportCase)

// Delete support case
router.delete('/:id', supportCasesController.deleteSupportCase)

module.exports = router;