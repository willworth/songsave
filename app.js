const express = require('express');
const bodyParser = require('body-parser');
const song = require('./routes/routes'); // Imports routes for the songs

// initialize 
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://southgate:football1@ds235711.mlab.com:35711/songsave';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/songs', song);

let port = 2323;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


