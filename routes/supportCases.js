const express = require('express');
const router = express.Router();

const supportCasesController = require('../controllers/supportCasesController');

// Get all cases
router.get('/', supportCasesController.getAll);

// Get single case
router.get('/:id', supportCasesController.getSingle)

module.exports = router;