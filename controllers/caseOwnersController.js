const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;


const getAll = async (req, res) => {
    //#swagger.tags=['Case Owners']
    try {
      const result = await mongodb.getDatabase().db().collection("caseOwners").find();
    result.toArray().then((caseOwners) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(caseOwners);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };
  
  
  
const getSingle = async (req, res) => {
    //#swagger.tags=['Case Owners']
    try {
      const ownerId = new ObjectId(req.params.id);
        const result = await mongodb
        .getDatabase()
        .db()
        .collection("caseOwners")
        .find({ _id: ownerId });
        result.toArray().then((caseOwners) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(caseOwners[0]);
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    };


const createCaseOwner = async (req, res) => {
    //#swagger.tags=['Case Owners']
    const caseOwner = {
      caseOwner: req.body.caseOwner,
      caseOwnerId: req.body.caseOwnerId,
      team: req.body.team,
    };
    const response = await mongodb.getDatabase().db().collection('caseOwners').insertOne(caseOwner);
    if (response.acknowledged) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the case owner.')
    }
  }


const updateCaseOwner = async (req, res) => {
    //#swagger.tags=['Case Owners']
    const ownerId = new ObjectId(req.params.id);
    const caseOwner = {
        caseOwner: req.body.caseOwner,
        caseOwnerId: req.body.caseOwnerId,
        team: req.body.team,
    }
    const response = await mongodb.getDatabase().db().collection('caseOwners').replaceOne({ _id: ownerId }, caseOwner);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the case owner.')
    }
}

const deleteCaseOwner = async (req, res) => {
    //#swagger.tags=['Case Owners']
    const ownerId = new ObjectId(req.params.id);
    const caseOwner = {
        caseOwner: req.body.caseOwner,
        caseOwnerId: req.body.caseOwnerId,
        team: req.body.team,
    }
    const response = await mongodb.getDatabase().db().collection('caseOwners').deleteOne({ _id: ownerId });
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the case owner.')
    }
  }

module.exports = {
    getAll,
    getSingle,
    createCaseOwner,
    updateCaseOwner,
    deleteCaseOwner
}