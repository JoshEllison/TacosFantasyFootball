const mongoose = require('mongoose');


// change to what data we want to display
// const footballSchema = mongoose.Schema({
//   title: {type: String, required: true},
//   text: {type: String, required: true},
//   likes: {type: Number, default: 0},
//   tags: [{type: String}]
// }, {timestamps: true})

module.exports = mongoose.model('Football', footballSchema);
