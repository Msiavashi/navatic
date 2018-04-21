import { SchemaTypes } from 'mongoose';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Ticket = require('./Ticket');
var Customer = require('./Customer');

var Order = new Schema({

    _id: {
        type: Schema.Types.ObjectId
    },

    tickets = [{
        type: Schema.Types.ObjectId,
        refs: "Ticket"
    }],

    customer: [{
        type: SchemaTypes.ObjectId,
        refs: 'Customer'
    }]
});

module.exports = mongoose.model("Order", Order);