const express = require('express');
const router = express.Router();

const supportCasesController = require('../controllers/supportCasesController');

// Get all cases
router.get('/', supportCasesController.getAll);

// Get single case
router.get('/:id', supportCasesController.getSingle)

// Create support case
router.post('/', supportCasesController.createSupportCase)

// Update support case
router.put('/:id', supportCasesController.updateSupportCase)

// Delete support case
router.delete('/:id', supportCasesController.deleteSupportCase)

module.exports = router;