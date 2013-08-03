var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var siteID = req.param('siteID')
    var sessionID = req.param('sessionID')
    console.log('%s %s', siteID, sessionID);
    response.send("hello world" );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});