import * as express from "express";

let server = express();

server.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});

server.listen(4333, console.log(`server is listening on 4333`));
    
