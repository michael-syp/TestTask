var express = require('express');
var compression = require('compression');
var app = express();

app.use(compression());
app.use('*/static/build', express.static(__dirname + '/public/static/build'));

app.all('/*', function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});


var port = 8080;
app.listen(port, function() {
    console.log('server listening on port ' + port);
});