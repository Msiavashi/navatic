
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = require('./Category');
var Sans = require('./Sans');
require('mongoose-type-url');

var Event = new Schema({

    _id:{
        type: Schema.Types.ObjectId
    },

    description: {
        type: String
    },

    date:{
        type: Date
    },

    category:{
        type: Schema.Types.ObjectId,
        refs: "Category"
    },

    trailerUrl: {
        type: mongoose.SchemaTypes.Url
    },

    sans:[{
        type: mongoose.SchemaTypes.ObjectId,
        refs: "Sans"
    }],

    imagesUrls: [{
        type: SchemaTypes.Url
    }]
    
});

module.exports = mongoose.model("Event", Event);