import { SchemaTypes } from 'mongoose';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Place = require('./Place');

var Category = new Schema({
	_id:{
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String
    },

    places: [{
        type: SchemaTypes.ObjectId,
        refs: "Place"
    }]
});


module.exports = mongoose.model('Category', Category);
