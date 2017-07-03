var mongoose = require('mongoose');

var greekGodSchema = mongoose.Schema({
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

var GreekGod = module.exports = mongoose.model('GreekGod', greekGodSchema);

module.exports.getGods = function(callback, limit){
  GreekGod.find(callback).limit(limit);
}
module.exports.addGod = function(god, callback){
  GreekGod.create(god, callback);
}
module.exports.getGodById = function(id, callback){
  GreekGod.findById(id, callback);
}
module.exports.updateGod = function(id, god, options, callback){
  var query = {_id: id};
  var update = {
    name: god.name,
    roman_name: god.roman_name,
    description: god.description,
    home_address: god.home_address
  };
  GreekGod.findOneAndUpdate(query, update, options, callback);
}
module.exports.deleteGod = function(id, callback){
  var query = {_id: id};
  GreekGod.remove(query, callback);
}