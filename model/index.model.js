//const { model } = require('mongoose');
const mongo = require('mongoose');

const sche = new mongo.Schema({
    name:{
        type : String
    },
    age:{
        type : Number
    }
});

module.exports = mongo.model('data',sche);