const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Hello world !!! ');
});

app.listen(8080,  () => {
    console.log('listening on port 8080');
});