const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HighscoreSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    username: String,
    score: Number,
    date: { type: Date, default: Date.now }
});

module.exports = Highscore = mongoose.model('Highscore', HighscoreSchema);