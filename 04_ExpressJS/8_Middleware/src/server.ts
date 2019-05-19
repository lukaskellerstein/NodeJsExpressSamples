import * as express from "express";

let server = express();

// Application level middleware
server.use('/', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

server.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});

//Error handling middleware
server.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

server.listen(4333, console.log(`server is listening on 4333`));

