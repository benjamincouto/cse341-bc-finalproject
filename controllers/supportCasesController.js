const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Support Cases']
    try {
      const result = await mongodb.getDatabase().db().collection("supportCases").find();
    result.toArray().then((supportCases) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(supportCases);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };
  
  
  
const getSingle = async (req, res) => {
    //#swagger.tags=['Support Cases']
    try {
      const caseId = new ObjectId(req.params.id);
        const result = await mongodb
        .getDatabase()
        .db()
        .collection("supportCases")
        .find({ _id: caseId });
        result.toArray().then((supportCases) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(supportCases[0]);
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    };

const createSupportCase = async (req, res) => {
    //#swagger.tags=['Support Cases']
    const supportCase = {
        caseNumber: req.body.caseNumber,
        caseOrigin: req.body.caseOrigin,
        status: req.body.status,
        subStatus: req.body.subStatus,
        description: req.body.description,
        internalComments: req.body.internalComments,
        caseOwner: req.body.caseOwner,
        customerCode: req.body.customerCode,
        createdBy: req.body.createdBy,  
    };
    const response = await mongodb.getDatabase().db().collection('supportCases').insertOne(supportCase);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the support case.')
    }
    }


const updateSupportCase = async (req, res) => {
    //#swagger.tags=['Support Cases']
    const caseId = new ObjectId(req.params.id);
    const supportCase = {
        caseNumber: req.body.caseNumber,
        caseOrigin: req.body.caseOrigin,
        status: req.body.status,
        subStatus: req.body.subStatus,
        description: req.body.description,
        internalComments: req.body.internalComments,
        caseOwner: req.body.caseOwner,
        customerCode: req.body.customerCode,
        createdBy: req.body.createdBy,  
    }
    const response = await mongodb.getDatabase().db().collection('supportCases').replaceOne({ _id: caseId }, supportCase);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the support case.')
    }
}

const deleteSupportCase = async (req, res) => {
    //#swagger.tags=['Support Cases']
    const caseId = new ObjectId(req.params.id);
    const supportCase = {
        caseNumber: req.body.caseNumber,
        caseOrigin: req.body.caseOrigin,
        status: req.body.status,
        subStatus: req.body.subStatus,
        description: req.body.description,
        internalComments: req.body.internalComments,
        caseOwner: req.body.caseOwner,
        customerCode: req.body.customerCode,
        createdBy: req.body.createdBy, 
    }
    const response = await mongodb.getDatabase().db().collection('supportCases').deleteOne({ _id: caseId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the case owner.')
    }
    }


module.exports = {
    getAll,
    getSingle,
    createSupportCase,
    updateSupportCase,
    deleteSupportCase
}