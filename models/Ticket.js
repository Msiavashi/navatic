
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Event = require('./Event');

var Ticket = new Schema({

    _id:{
        type: Schema.Types.ObjectId
    },

    event: {
        type: Schema.Types.ObjectId,
        refs: "Event",
        required: true
    }

});


module.exports = mongoose.model("Ticket", Ticket);