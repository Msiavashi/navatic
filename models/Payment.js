
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Payment = new Schema({

    _id: {
        type: mongoose.SchemaTypes.ObjectId
    },


    //TODO: ask farhad
});


module.exports = mongoose.model("Payment", Payment);