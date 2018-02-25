//server.js
'use strict'

//import dependencies first…
var bodyParser = require('body-parser');
var express = require('express');


//create app and router
var app = express();
var router = express.Router();

//set port 3001 as 3000 has react app
var port = process.env.API_PORT || 3001;

//configure bodyParser and look for JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To Prevent errors we will set Cross Origin Resource Sharing  
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//remove cacheing
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//set route path 
//initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
console.log(`api running on port ${port}`);
});