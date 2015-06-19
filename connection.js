var monk = require('monk');
var db = monk(process.env.MONGOLAB_URI || 'localhost/album_class_demo');
module.exports = db;
