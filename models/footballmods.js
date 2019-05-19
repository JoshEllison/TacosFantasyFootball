const mongoose = require('mongoose');


// change to what data we want to display
const footballSchema = mongoose.Schema({
  playerName: {type: String},
  text: {type: String},

  ppr: {type: Boolean, default: 1}

})

module.exports = mongoose.model('Football', footballSchema);
