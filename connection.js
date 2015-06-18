var monk = require('monk');
var db = monk('localhost:27017/cabins');

module.exports = db;
