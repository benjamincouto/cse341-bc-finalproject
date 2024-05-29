const express = require('express');
const router = express.Router();

const caseOwnersController = require('../controllers/caseOwnersController');

// Get all cases
router.get('/', caseOwnersController.getAll);

// Get single case
router.get('/:id', caseOwnersController.getSingle)

// Create case owner
router.post('/', caseOwnersController.createCaseOwner)

// Update case owner
router.put('/:id', caseOwnersController.updateCaseOwner)

// Delete case owner
router.delete('/:id', caseOwnersController.deleteCaseOwner)

module.exports = router;