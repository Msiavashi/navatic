
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var City = require('./City');
var State = require('./State');
var Plan = require('./Plan');

var Place = new Schema({

    _id:{
        type: mongoose.Schema.Types.ObjectId
    },

    name: {
        type: String
    },

    address:{
        type: String
    },

    city: {
        type: Schema.Types.ObjectId, 
        refs: "City"
    },

    state: {
        type: Schema.Types.ObjectId,
        refs: "State"
    },

    seats: {
        status: {
            type: Object
        },
    },

    plan: {
        type: Schema.Types.ObjectId,
        refs: "Plan"
    }

});


module.exports = mongoose.model("Place", Place);