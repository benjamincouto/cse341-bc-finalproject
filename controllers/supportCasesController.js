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

module.exports = {
    getAll,
    getSingle,
}