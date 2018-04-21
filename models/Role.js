var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Role = new Schema({

    role = [{type: String, enum:["admin", "supervisor", "customer"]}]

});

module.exports = mongoose.model("Role", Role);