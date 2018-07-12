const Song = require('../models/models');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the new song test controller!');
};



exports.create = function (req, res) {
    let song = new Song(
        {
            title: req.body.title,
            artist: req.body.artist,
            body: req.body.body
        }
    );

    song.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Song Created successfully')
    })
};