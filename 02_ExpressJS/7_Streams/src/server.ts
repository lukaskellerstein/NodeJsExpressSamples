import * as express from "express";
import * as fs from "fs";
import { CustomWritableStream, CustomReadableStream, CustomDuplexStream, CustomTransformStream } from "./customstream"

let server = express();

server.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});

// READ JSON
server.get('/somedata', (req,res) => {
    var readable = fs.createReadStream('../data/generated.json');
    readable.pipe(res);
});

//CUSTOM READABLE STREAM
server.get('/somedata2', (req,res) => {
    var readable = new CustomReadableStream();
    readable.pipe(res);
});

//CUSTOM WRITABLE STREAM
server.get('/somedata3', (req,res) => {
    var readable = fs.createReadStream('../data/generated.json');
    readable.pipe(new CustomWritableStream);
});

//CUSTOM DUPLEX STREAM
server.get('/somedata4', (req,res) => {
    var readable = fs.createReadStream('../data/generated.json');
    readable.pipe(new CustomDuplexStream).pipe(res);
});

//CUSTOM TRANSFORM STREAM
server.get('/somedata5', (req,res) => {
    var readable = fs.createReadStream('../data/generated.json');
    readable.pipe(new CustomTransformStream).pipe(res);
});



server.listen(4333, console.log(`server is listening on 4333`));

