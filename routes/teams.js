const express = require('express');
const router = express.Router();

// Controller
const teamsController = require('../controllers/teamsController');

// Validation
const validation = require('../middleware/validate')

// Get all teams
router.get('/', teamsController.getAll);

// Get single team
router.get('/:id', teamsController.getSingle);

// Create team 
router.post('/', validation.saveTeam, teamsController.createTeam);

// Update team 
router.put('/:id', validation.saveTeam, teamsController.updateTeam);

// Delete team
router.delete('/:id', teamsController.deleteTeam);


module.exports = router;