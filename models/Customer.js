var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Payment = require('./Payment');
var Role = require('./Role');
var Order = require('./Order');

var Customer = new Schema({

    _id: {
        type : mongoose.Schema.Types.ObjectId
    },
    
    name: {
        first: {type: String, trim: true},
        last: {type: String, trim: true},
        required: true
    },

    nationalId: {
        type: String,
        trim:true,
        required:true
    },

    gender: {
        type: String,
    },

    email: {
        type: String,
        lowercase:true, 
        trim: true, 
        required: true
    },
    phoneNumber: {
        type: String,
        trim: true,
        required: true
    },

    address: {
        type: String
    },

    payments:[{
        type: Schema.Types.ObjectId,
        refs: "Payment"
    }],

    roles: [{

        type: Schema.Types.ObjectId,
        refs: "Role"
    }],

    orders: [{

        type: Schema.Types.ObjectId,
        refs: "Order"
    }]
});

module.exports = mongoose.model('Customer', Customer);