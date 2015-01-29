var express = require('express');
var path = require('path');

var app = express();
var port = 8080;

app.use(express.static(path.resolve(__dirname + '/public')));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port).on('listening', function() {
    console.log('App listening on %d', port);
});