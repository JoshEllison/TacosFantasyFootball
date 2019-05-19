const mongoose = require('mongoose');


// change to what data we want to display
const footballSchema = mongoose.Schema({
<<<<<<< HEAD
  playerName: {type: String, required: true},
  position: {type: String, required: true},
  rank: {type: Number, minimum: 1},
}, {timestamps: true})
=======
  playerName: {type: String},
  text: {type: String},

  ppr: {type: Boolean, default: 1}

})
>>>>>>> 32e78944add0658b554899c2c3a9c53935b79165

module.exports = mongoose.model('Football', footballSchema);
