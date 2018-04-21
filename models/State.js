import { SchemaTypes } from 'mongoose';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var City = require('./City');


var State = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId
    },

    name:{
        type: String
    },

    city: {
        type: SchemaTypes.ObjectId,
        refs: "City"
    }

});

module.exports = mongoose.model("State", State);