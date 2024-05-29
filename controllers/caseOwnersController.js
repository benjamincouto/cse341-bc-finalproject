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

module.exports = {
    getAll,
    getSingle,
}