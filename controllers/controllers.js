const Song = require('../models/models');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the new song test controller!');
};