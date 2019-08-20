var express = require('express');
var app = express();
let url = require('url');
let db= [];
let router = require('./router.js');

function generateList() {
    let st = 'Id  Name   Quantity Price  </br>';
    for (let i = 0; i < db.length; i++) {
        st += db[i].id + ' | ' + db[i].name + ' | ' + db[i].quantity + +db[i].price + '</br>';
    }
    return st;
}
//both router.js and server.js should be in same directory
app.use('/', router);

app.listen(8080);
console.log("server is running")