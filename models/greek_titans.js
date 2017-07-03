var mongoose = require('mongoose');

var greekTitanSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roman_name: {
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

var GreekTitan = module.exports = mongoose.model('GreekTitan', greekTitanSchema);

module.exports.getTitans = function(callback, limit){
  GreekTitan.find(callback).limit(limit);
}
module.exports.addTitan = function(titan, callback){
  GreekTitan.create(titan, callback);
}
module.exports.getTitanById = function(id, callback){
  GreekTitan.findById(id, callback);
}
module.exports.updateTitan = function(id, titan, options, callback){
  var query = {_id: id};
  var update = {
    name: titan.name,
    status: titan.status,
    symbols: titan.symbols
  };
  GreekTitan.findOneAndUpdate(query, update, options, callback);
}
module.exports.deleteTitan = function(id, callback){
  var query = {_id: id};
  GreekTitan.remove(query, callback);
}