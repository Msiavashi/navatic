'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
var http = require('http');
var swaggerTools = require('swagger-tools');
var jwt = require('jsonwebtoken');
var jsyaml = require('js-yaml');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
const Payir = require('payir');
const request = require('request');
mongoose.connect('mongodb://localhost:27017/navatic');
const MellatCheckout = require('mellat-checkout');
var moment = require('moment-jalaali');
const Mellat = require('mellat-payment');
var dateFormat = require('dateformat');
var soap = require('soap');
var fs = require('fs');
var serverPort = 8080;



app.use(bodyParser.urlencoded({ extended: true }));

// swaggerRouter configuration
var options = {
    swaggerUi: '/swagger.json',
    controllers: './controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};


global.gateway = new Payir('6d33cda4ebf46994c2a8723890068216');
global.savepath = "./static/uploads"
app.use('/static', express.static(__dirname + '/static'));
global.baseurl = "http://navatic.meandme.ir:8080"
global.sms = {};
global.sms.apikey = "576572736b4d4b5363525a73594165532f47707574673d3d";
global.sms.from = "200007767";
global.sms.verifycontent = "200007767";
app.use(bodyParser.json({ limit: '50mb' }));
// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);
let sharedSecret = "Farhad@72";
global.gettoken = function (user) {
    var token = jwt.sign(JSON.parse(JSON.stringify(JSON.stringify(user))), sharedSecret);
    return token;
};

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Setup security handlers
    app.use(middleware.swaggerSecurity({
        APIKey: function (req, def, JWTAuth, callback) {
            var current_req_scopes = req.swagger.operation["x-security-scopes"]
            if (!!JWTAuth && JWTAuth.indexOf("Bearer ") == 0) {
                var JWTToken = JWTAuth.split("Bearer ")[1]
                jwt.verify(JWTToken, sharedSecret, function (err, payload) {
                    if (err) {
                        var err = new Error('Invalid token');
                        err['statusCode'] = 400;
                        callback(err);
                        return
                    }
                    if (payload.type != 'public' && payload.type != 'admin'
                        && (payload.type != current_req_scopes || !(current_req_scopes instanceof Array && current_req_scopes.indexOf(payload.type) >= 0))) {
                        var err = new Error('Not Authorized');
                        err['statusCode'] = 401;
                        callback(err);
                        return
                    }
                    else {
                        req.swagger.params.auth_payload = payload;    //example
                        callback()
                    }
                });
            } else if (current_req_scopes == 'public') {
                callback();
            } else {
                var err = new Error('Failed to authenticate using bearer token');
                err['statusCode'] = 403; // custom error code
                callback({
                    message: "Failed to authenticate using bearer token",
                    statusCode: 403
                });
            }
        },
    }));

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Start the server
    http.createServer(app).listen(serverPort, function () {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });
});

global.verficationSms = function (phone, VerifyCode) {
    var url = 'https://api.kavenegar.com/v1/' + global.sms.apikey + '/verify/lookup.json?receptor=' + phone + '&token=' + VerifyCode + '&template=nonet';
    console.log(url)
    request.post(
        url,
        {},
        function (error, response, body) {
            //let resp = JSON.parse(response.body);
        }
    );
}

let day_of_week = {
    "0": "یکشنبه",
    "1": "دوشنبه",
    "2": "سه شنبه",
    "3": "چهارشنبه",
    "4": "پنج شنبه",
    "5": "جمعه",
    "6": "شنبه"
}

global.process_times_for_user = function (times) {
    var keys = Object.keys(times);
    let result = []
    for (let i = 0; i < keys.length; i++) {
        let proccessed = {};
        let weekDay = moment(keys[i], 'jYYYY_jM_jD').weekday()
        proccessed.day_of_week = day_of_week[weekDay];
        proccessed.times = times[keys[i]];
        proccessed.date = keys[i];
        result.push(proccessed);
    }
    return result;
}



