const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'));

// router.get('/', (req, res) => { 
//     //#swagger.tags=['Suport Cases Sentiment API']
//     res.send('Welcome to the API!');
// });

//supportCases
router.use('/support-cases', require('./supportCases'))

//caseOwners
router.use('/case-owners', require('./caseOwners'))

//teams
router.use('/teams', require('./teams'))

//sentiments
router.use('/sentiments', require('./sentiments'))

//login and logout
router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});



module.exports = router