var express = require('express');
var app = express();
let url = require('url');
let db= [];
let router = require('./router.js');
//both router.js and server.js should be in same directory
app.use('/', router);

app.listen(8080);
console.log("server is running")