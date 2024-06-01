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

  it('should retrieve a single team', async () => {
    const teams = db.collection('teams');
    const teamId = new ObjectId('6657e96234663792048c8e10');

    const realTeam = { 
      _id: teamId,
      teamName: 'Support Team A',
      teamDescription: 'Handles initial customer queries and basic troubleshooting (1st Level).',
      teamLead: 'Alice Johnson'
    };

    const retrievedTeam = await teams.findOne({ _id: teamId });
    
    expect(retrievedTeam).toEqual(realTeam);
  });
});
