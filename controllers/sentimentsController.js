const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags=['Sentiments']
    try {
      const result = await mongodb.getDatabase().db().collection("sentiments").find();
    result.toArray().then((sentiments) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(sentiments);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  };
  
  
  
const getSingle = async (req, res) => {
    //#swagger.tags=['Sentiments']
    try {
      const sentimentId = new ObjectId(req.params.id);
        const result = await mongodb
        .getDatabase()
        .db()
        .collection("sentiments")
        .find({ _id: sentimentId });
        result.toArray().then((sentiments) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(sentiments[0]);
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    };


const createSentiment = async (req, res) => {
    //#swagger.tags=['Sentiments']
    const sentiment = {
      sentimentCategory: req.body.sentimentCategory,
      sentimentDescription: req.body.sentimentDescription,
      sentimentNumber: req.body.sentimentNumber,
    };
    const response = await mongodb.getDatabase().db().collection('sentiments').insertOne(sentiment);
    if (response.acknowledged) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the sentiment.')
    }
  }


const updateSentiment = async (req, res) => {
    //#swagger.tags=['Sentiments']
    const sentimentId = new ObjectId(req.params.id);
    const sentiment = {
        sentimentCategory: req.body.sentimentCategory,
        sentimentDescription: req.body.sentimentDescription,
        sentimentNumber: req.body.sentimentNumber,
    }
    const response = await mongodb.getDatabase().db().collection('sentiments').replaceOne({ _id: sentimentId }, sentiment);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the sentiment.')
    }
}

const deleteSentiment = async (req, res) => {
    //#swagger.tags=['Sentiments']
    const sentimentId = new ObjectId(req.params.id);
    const sentiment = {
        sentimentCategory: req.body.sentimentCategory,
        sentimentDescription: req.body.sentimentDescription,
        sentimentNumber: req.body.sentimentNumber,
    }
    const response = await mongodb.getDatabase().db().collection('sentiments').deleteOne({ _id: sentimentId });
    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the sentiment.')
    }
  }

module.exports = {
    getAll,
    getSingle,
    createSentiment,
    updateSentiment,
    deleteSentiment
}