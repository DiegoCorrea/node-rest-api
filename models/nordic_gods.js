var mongoose = require('mongoose');

var nordicGodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  day_of_week: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  home_address: {
    type: String
  },
  create_at:{
    type: Date,
    default: Date.now
  }
});

var NordicGod = module.exports = mongoose.model('NordicGod', nordicGodSchema);

module.exports.getGods = function(callback, limit){
  NordicGod.find(callback).limit(limit);
}
module.exports.addGod = function(god, callback){
  NordicGod.create(god, callback);
}
module.exports.getGodById = function(id, callback){
  NordicGod.findById(id, callback);
}
module.exports.updateGod = function(id, god, options, callback){
  var query = {_id: id};
  var update = {
    name: god.name,
    status: god.status,
    symbols: god.symbols
  };
  NordicGod.findOneAndUpdate(query, update, options, callback);
}
module.exports.deleteGod = function(id, callback){
  var query = {_id: id};
  NordicGod.remove(query, callback);
}