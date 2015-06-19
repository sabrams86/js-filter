var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI || 'localhost:27017/cabins');
module.exports = db;
