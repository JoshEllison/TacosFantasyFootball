const mongoose = require('mongoose');


// change to what data we want to display
const footballSchema = mongoose.Schema({
  displayName: {type: String},
  week: {type: Number, minimum: 1},
  team: {type: String},
  position: {type: String, required:true},
  rank: {type: Number},
  fantasyPoints: {type: String},
  overallRank: {type: String},
  byeWeek: {type: String},
  completions: {type: String},
  attempts: {type: String},
  passingTD: {type: String},
  passingYards: {type: String},
  passingInt: {type: String},
  rushYards: {type: String},
  rushTD: {type: String},
  passAtt: {type: String},
  PPR: {type: String},
  photoUrl: {type: String}
})

module.exports = mongoose.model('Football', footballSchema);
