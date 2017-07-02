var mongoose = require('mongoose');

var nordicSchema = mongoose.Schema({
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

var Nordic = module.exports = mongoose.model('Nordic', nordicSchema);

module.exports.getAll = function(callback, limit){
  Nordic.find(callback).limit(limit);
}

module.exports.getGodById = function(id, callback){
    Nordic.findById(id, callback);
}