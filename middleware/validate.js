const validator = require('../helpers/validate');

const saveSupportCase = (req, res, next) => {
    const validationRule = {
        caseNumber: 'required|string',
        caseOrigin: 'required|string',
        status: 'required|string',
        subStatus: 'string',
        description: 'required|string',
        internalComments: 'required|string',
        caseOwner: 'required|string',
        customerCode: 'required|string',
        createdBy: 'required|string',  
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                sucess: false,
                message: 'Validation Failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveCaseOwner = (req, res, next) => {
    const validationRule = {
        caseOwner: 'required|string',
        caseOwnerId: 'required|string',
        team: 'required|string',  
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                sucess: false,
                message: 'Validation Failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveTeam = (req, res, next) => {
    const validationRule = {
        teamName: 'required|string',
        teamDescription: 'required|string',
        teamLead: 'required|string',  
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                sucess: false,
                message: 'Validation Failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveSentiment = (req, res, next) => {
    const validationRule = {
        sentimentCategory: 'required|string',
        sentimentDescription: 'required|string',
        sentimentNumber: 'required|integer',  
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                sucess: false,
                message: 'Validation Failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveSupportCase,
    saveCaseOwner,
    saveTeam,
    saveSentiment
}