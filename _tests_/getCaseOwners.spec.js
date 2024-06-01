const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_DB_NAME = 'cse341-finalproject';

describe('Test caseOwner get end points', () => {
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

  it('should retrieve a single case owner', async () => {
    const caseOwners = db.collection('caseOwners');
    const caseOwnerId = new ObjectId('66569aa62f3ffdbaa384ff4d');

    const realCaseOwner = { 
      _id: caseOwnerId,
      caseOwner: 'Alice Johnson',
      caseOwnerId: 'AJ001',
      team: 'Support Team A'
    };

    const retrievedCaseOwner = await caseOwners.findOne({ _id: caseOwnerId });
    
    expect(retrievedCaseOwner).toEqual(realCaseOwner);
  });
});
