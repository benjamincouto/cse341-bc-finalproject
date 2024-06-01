const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_DB_NAME = 'cse341-finalproject';

describe('Test sentiments get end points', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(MONGO_DB_NAME);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should retrieve a single sentiment', async () => {
    const sentiments = db.collection('sentiments');
    const sentimentId = new ObjectId('6657e5d534663792048c8e01');

    const realSentiment = { 
      _id: sentimentId,
      sentimentCategory: 'Positive',
      sentimentDescription: 'Expresses satisfaction with the service or resolution provided.',
      sentimentNumber: 1
    };

    const retrievedSentiment = await sentiments.findOne({ _id: sentimentId });
    
    expect(retrievedSentiment).toEqual(realSentiment);
  });
});
