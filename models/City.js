var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Advertisement = require("./Advertisement");

var City = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId
    },

    name: {
        type: String
    },

    advertisement:{
        type: Schema.Types.ObjectId,
        refs: "Advertisement"
    }
    
});

module.exports = mongoose.model("City", City);