var monk = require('monk');
//UNCOMMENT FOR LOCALHOST
// var db = monk('localhost:27017/cabins');
//UNCOMMENT FOR HEROKU DEPLOY!!!
var db = monk('mongolab.com:47602/heroku_dzlm604k');
module.exports = db;
