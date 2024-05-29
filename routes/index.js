const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => { 
    //#swagger.tags=['Suport Cases Sentiment API']
    res.send('Welcome to the API!');
});

//supportCases
router.use('/support-cases', require('./supportCases'))

//caseOwners
router.use('/case-owners', require('./caseOwners'))

module.exports = router