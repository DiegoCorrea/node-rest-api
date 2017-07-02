var mongoose = require('mongoose');

var greekSchema = mongoose.Schema({
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

var Greek = module.exports = mongoose.model('Greek', greekSchema);

module.exports.getAll = function(callback, limit){
    Greek.find(callback).limit(limit);
}
module.exports.addGod = function(god, callback){
    Greek.create(god, callback);
}
module.exports.getGodById = function(id, callback){
    Greek.findById(id, callback);
}
module.exports.updateGod = function(id, god, options, callback){
    var query = {_id: id};
    var update = {
        name: god.name,
        status: god.status,
        symbols: god.symbols
    };
    Greek.findOneAndUpdate(query, update, options, callback);
}
module.exports.deleteGod = function(id, callback){
    var query = {_id: id};
    Greek.remove(query, callback);
}