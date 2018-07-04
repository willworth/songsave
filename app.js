const express = require('express');
const bodyParser = require('body-parser');
const song = require('./routes/routes'); // Imports routes for the songs



// initialize 
const app = express();

app.use('/songs', song);

let port = 2323;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});








