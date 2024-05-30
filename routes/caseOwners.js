const express = require('express');
const router = express.Router();

// Controller
const caseOwnersController = require('../controllers/caseOwnersController');

// Validation
const validation = require('../middleware/validate')

// Get all cases
router.get('/', caseOwnersController.getAll);

// Get single case
router.get('/:id', caseOwnersController.getSingle)

// Create case owner
router.post('/', validation.saveCaseOwner, caseOwnersController.createCaseOwner)

// Update case owner
router.put('/:id', validation.saveCaseOwner, caseOwnersController.updateCaseOwner)

// Delete case owner
router.delete('/:id', caseOwnersController.deleteCaseOwner)


module.exports = router;