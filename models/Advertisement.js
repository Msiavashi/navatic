var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-type-url');


var Advertisement = new Schema({
    
    description: {type: String},
    name: {type: String},
    url: {
        type: mongoose.SchemaTypes.Url
    }

});

module.exports = mongoose.model("Advertisement", Advertisement);