import * as express from "express";

let server = express();

server.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
});

server.get('/home', (req, res) => {
    res.send("Home page")
});

server.get('/about', (req, res) => {
    res.send("About page")
});

server.get('/contact', (req, res) => {
    res.send("Contact page")
});

server.listen(4333, console.log(`server is listening on 4333`));
    
