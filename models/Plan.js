var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Plan = new Schema({

    plan: {
        type: Object
    },        //structure of the seats
    
});

module.exports = mongoose.model('Plan', Plan);