const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Support Cases Sentiment API',
        description: 'Support Cases Sentiment Api'
    },
    host: 'cse341-bc-finalproject.onrender.com',
    schemes: ['https']
    // host: 'localhost:3000',
    // schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);