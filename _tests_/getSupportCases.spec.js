const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_DB_NAME = 'cse341-finalproject';

describe('Test teams get end points', () => {
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

  it('should retrieve a support case', async () => {
    const supportCases = db.collection('supportCases');
    const supportCaseId = new ObjectId('66569ab12f3ffdbaa384ff56');

    const realSupportCase = { 
      _id: supportCaseId,
      caseNumber: "001",
      caseOrigin: "email",
      status: "New",
      subStatus: null,
      description: "Cannot access the travel booking portal.",
      internalComments: "Initial troubleshooting steps sent to customer.",
      caseOwner: "Alice Johnson",
      customerCode: "A123",
      createdBy: "John Doe"

    };

    const retrievedSupportCase = await supportCases.findOne({ _id: supportCaseId });
    
    expect(retrievedSupportCase).toEqual(realSupportCase);
  });
});
