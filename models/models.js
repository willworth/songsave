const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let songSchema = new Schema({
    title:  {type: String, required: true, max: 100},
    artist: {type: String, required: true, max: 100},
    body:   {type: String, required: true},
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,



});


// Export the model
module.exports = mongoose.model('song', songSchema);