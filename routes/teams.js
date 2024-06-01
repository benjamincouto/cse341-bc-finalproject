const express = require('express');
const router = express.Router();

// Controller
const teamsController = require('../controllers/teamsController');

// Validation
const validation = require('../middleware/validate')

//Authentication
const { isAuthenticated } = require('../middleware/authenticate');

// Get all teams
router.get('/', teamsController.getAll);

// Get single team
router.get('/:id', teamsController.getSingle);

// Create team 
router.post('/', isAuthenticated, validation.saveTeam, teamsController.createTeam);

// Update team 
router.put('/:id', isAuthenticated, validation.saveTeam, teamsController.updateTeam);

// Delete team
router.delete('/:id', isAuthenticated, teamsController.deleteTeam);


module.exports = router;