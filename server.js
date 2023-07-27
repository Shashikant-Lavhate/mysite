var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
});
app.get('/login', function (req, res) {
    res.sendFile(path.join(___dirname + '/login.html'));
});
app.get('/about', function (req, res) {
    res.sendFile(path.join(___dirname + '/about.html'));
});
app.get('/contact', function (req, res) {
    res.sendFile(path.join(___dirname + '/contact.html'));
});

var server = app.listen(3333, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:3333", host, port)
});
