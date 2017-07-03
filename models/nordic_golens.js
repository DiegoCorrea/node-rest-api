var mongoose = require('mongoose');

var nordicGolemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  symbols: {
    type: String,
    required: true
  },
  create_at:{
    type: Date,
    default: Date.now
  }
});

var NordicGolem = module.exports = mongoose.model('NordicGolem', nordicGolemSchema);

module.exports.getGolens = function(callback, limit){
  NordicGolem.find(callback).limit(limit);
}
module.exports.addGolem = function(golem, callback){
  NordicGolem.create(golem, callback);
}
module.exports.getGolemById = function(id, callback){
  NordicGolem.findById(id, callback);
}
module.exports.updateGolem = function(id, golem, options, callback){
  var query = {_id: id};
  var update = {
    name: golem.name,
    status: golem.status,
    symbols: golem.symbols
  };
  NordicGolem.findOneAndUpdate(query, update, options, callback);
}
module.exports.deleteGolem = function(id, callback){
  var query = {_id: id};
  NordicGolem.remove(query, callback);
}