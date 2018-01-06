import * as express from "express";
import * as path from "path";
// import * as favicon from "serve-favicon";
// import * as cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";

// var path = require('path');
// var favicon = require('serve-favicon');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


let server = express();


server.use(bodyParser.urlencoded({ extended: false }));
server.use(express.static("dist"));

server.get('/*', function (req, res) {
    res.sendFile(path.join("dist", 'index.html'));
});

// catch 404 and forward to error handler
server.use(function (req, res, next) {
    var err = new Error('Not Found');
    //err.status = 404;
    next(err);
});

server.listen(3001, function () {
    console.log('Example listening on port 3001!');
});
