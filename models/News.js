import { SchemaTypes } from 'mongoose';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-type-url');

var News = new Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId
    },
    title: {type: String},
    content: {type: String},
    imagesUrls: [{
        type: SchemaTypes.Url,
    }]

});