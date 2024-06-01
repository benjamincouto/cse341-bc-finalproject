const express = require('express');
const router = express.Router();

// Controller
const caseOwnersController = require('../controllers/caseOwnersController');

// Validation
const validation = require('../middleware/validate')

//Authentication
const { isAuthenticated } = require('../middleware/authenticate');

// Get all cases
router.get('/', caseOwnersController.getAll);

// Get single case
router.get('/:id', caseOwnersController.getSingle)

// Create case owner
router.post('/', isAuthenticated, validation.saveCaseOwner, caseOwnersController.createCaseOwner)

// Update case owner
router.put('/:id', isAuthenticated, validation.saveCaseOwner, caseOwnersController.updateCaseOwner)

// Delete case owner
router.delete('/:id', isAuthenticated, caseOwnersController.deleteCaseOwner)


module.exports = router;