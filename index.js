var express = require('express');
var path = require('path');
var serverStatic = require('serve-static');

app = express()
app.use(serverStatic(path.join(__dirname, 'site')));

var port = process.env.PORT || 5001;
app.listen(port);

console.log("Server running on:" + port)