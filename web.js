var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    console.log(req)
    console.log(req.params)
    console.log(req.body)
    console.log(req.query)
    response.send(req);
    var siteID = req.param('siteID')
    var sessionID = req.param('sessionID')
    console.log('%s %s', siteID, sessionID);
    response.send("hello world" );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});