const express = require('express');
const bodyParser = require('body-parser');

// initialize 
const app = express();


let port = 2323;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});