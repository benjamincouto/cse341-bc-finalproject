const express = require('express');
const router = express.Router();

const caseOwnersController = require('../controllers/caseOwnersController');

// Get all cases
router.get('/', caseOwnersController.getAll);

// Get single case
router.get('/:id', caseOwnersController.getSingle)

module.exports = router;