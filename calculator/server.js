//server.js
'use strict'

//import dependencies first…
var bodyParser = require('body-parser');
var express = require('express');
var Regex = require("regex");

//create app and router
var app = express();
var router = express.Router();

//set port 3001 as 3000 has react app
var port = process.env.API_PORT || 3001;

//configure bodyParser and look for JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To Prevent errors we will set Cross Origin Resource Sharing  
app.use(function (req, res, next) {
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
router.get('/', function (req, res) {
    res.json({ message: 'API Initialized!' });
});

//Use our router configuration when we call /api
app.use('/api', router);

//calculate API
router.route('/calculate').post(function (req, res) {

    console.log("Request Received on Server");
    console.log(req.body);
   
    if(req.body.operator && req.body.operand1 && req.body.operand1 ){
        let expression =''; 
        if (req.body.operator == 1) { expression= req.body.operand1 +'*'+ req.body.operand2 };
        if (req.body.operator == 2) { expression= req.body.operand1 +'/'+ req.body.operand2  };
        if (req.body.operator == 3) { expression= req.body.operand1 +'+'+ req.body.operand2  };
        if (req.body.operator == 4) { expression= req.body.operand1 +'-'+ req.body.operand2  };
    
        
        
        console.log("Expression in Evaluation : "+expression);
       // var re = new Regex("^\s*([-+]*)(\d+)(\.?\d+)(?:\s*([-+*\/])([-+]*)(\d*)(\.?\d+)\s*)");
        //console.log(re.test(expression));
        const regex = /^\s*([-+]*)(\d*)(\.?\d*)(?:\s*([-+*\/])\s*((?:\s*[-+])?(\d*)(\.?\d*))\s*)+$/g;
        let m;
        
        m = regex.exec(expression);
        if(m[0]==expression){
        var serverState = {
            history: expression,
            operand1: "0",
            operand2: "0",
            operator: "0",
            message: "",
            messageCode: "", //0 for success, rest all fail cases
            result: ""
        }
    
        if (req.body.operator == 1) { serverState.operand2 = eval(req.body.operand1) * eval(req.body.operand2); };
        if (req.body.operator == 2) { serverState.operand2 = eval(req.body.operand1) / eval(req.body.operand2); };
        if (req.body.operator == 3) { serverState.operand2 = eval(req.body.operand1) + eval(req.body.operand2); };
        if (req.body.operator == 4) { serverState.operand2 = eval(req.body.operand1) - eval(req.body.operand2); };
    
        serverState.result = serverState.operand2;
        serverState.message = "POST request successfully executed";
        serverState.messageCode = "0";
        
        if(req.body.apiCall){
            res.json(serverState);
        }else{
            res.json({ result: serverState.operand2});
          
            
        }

        }
        else{
            console.log("ERROR in POST");
            res.json({ message: 'Please provide operand1, operand2 and operator in correct format'});
            
        }      
    }else{
        res.json({ message: 'provide operand1, operand2 and operator with POST request in JSON format'});        
    }
    
});

router.route('/calculate').get(function (req, res) {
    console.log("GET Request Received on Server");
        res.json({ message: 'provide operand1, operand2 and operator in JSON format'});        
    
});

//starts the server and listens for requests
app.listen(port, function () {
    console.log(`api running on port ${port}`);
});