var express = require('express');
var app = module.exports = express.createServer();
app.mongoose = require('mongoose');

var config = require('./config.js')(app, express);

var models = {
	Book: require('./models/book')(app.mongoose)
};

console.log("App startup");

var controllers = {
	home : require('./controllers/homeController')(models),
	book : require('./controllers/bookController')(models)
};

// Populate some sample data
require('./sampleData')(models);

require('./routes')(app, controllers);

app.listen(process.env.PORT || 3000);