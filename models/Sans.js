var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Place = require('./Place');


var Sans = new Schema({

    _id:{
        type: Schema.Types.ObjectId
    },

    date:{
        type: Date
    },
    
    place:{
        type: mongoose.SchemaTypes.ObjectId,
        refs: "Place"
    }

});

module.exports = mongoose.model('Sans', Sans);