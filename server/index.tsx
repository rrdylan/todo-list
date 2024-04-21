// Node.js framework
const express = require('express');
// CORS package provide Connect/Express middleware
// CORS = Cross-Origin Resource Sharing, permet les requetes front to back
const cors = require('cors');

const app = express();



app.use(cors());

app.get('/', (request, response) => {
    response.send('Hello world !!! ');
});

app.listen(8080,  () => {
    console.log('listening on port 8080');
});