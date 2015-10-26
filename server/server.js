//this will be server.js

var express = require('express');
var https = require('https');
var pem = require('pem');

var salesforceAuth = require('../salesforceAuth');
console.log('this is auth', salesforceAuth);

pem.createCertificate({days:1, selfSigned:true}, function(err, keys){

  var app = express();

  app.use(express.static(__dirname + '/../client'));

  app.get('/asdf', function(req, res) {
    res.send('hello world');
  })


  https.createServer({key: keys.serviceKey, cert: keys.certificate}, app).listen(443);
});
