const mongoose = require('mongoose');


// change to what data we want to display
const footballSchema = mongoose.Schema({
  playerName: {type: String, required: true},
  position: {type: String, required: true},
  rank: {type: Number, minimum: 1},
}, {timestamps: true})

module.exports = mongoose.model('Football', footballSchema);
