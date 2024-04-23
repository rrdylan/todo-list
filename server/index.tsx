// Node.js framework
const express = require('express');
// CORS package provide Connect/Express middleware
// CORS = Cross-Origin Resource Sharing, permet les requetes front to back
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();


app.use(cors());


app.get('/', (request, response) => {
    response.send('Hello world !!! ');
});

app.get('/api', (request, response) => {
   response.json({ message: "Les chiffres Mason !!"});
});

// .listen doit toujours être après les .get
app.listen(PORT,  () => {
    console.log(`listening on port ${PORT}`);
});