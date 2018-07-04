const express = require('express');
const router = express.Router();

// Require the controllers 
const song_controller = require('../controllers/controllers');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', song_controller.test);

module.exports = router;