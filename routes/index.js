const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World');});

//supportCases
router.use('/support-cases', require('./supportCases'))

//caseOwners
router.use('/case-owners', require('./caseOwners'))

module.exports = router