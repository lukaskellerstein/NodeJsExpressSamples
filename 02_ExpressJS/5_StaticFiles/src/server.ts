import * as express from "express";
import * as engines from "consolidate";
import { User, Users } from './users'
let server = express();

server.engine('hbs', engines.handlebars);
server.set('views', '../views');
server.set('view engine', 'hbs');

server.use(express.static('../images'));

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

server.get('/users', (req, res) => {

    let users = new Users();
    let buffer = "";

    res.render('users.hbs', {users: users.items});

    // users.items.forEach(element => {
    //     buffer += "<a href='/user/" + element.id + "'>" + element.name + "</a> </br>";
    // });

    // res.send(buffer);
});

server.get('/user/:id', (req, res) => {

    let users = new Users();
    let id = req.params.id;
    let buffer = "";
    users.items.forEach(element => {

        if(element.id == id){
            buffer += "<div style='border: 1px solid black'>";
            buffer += "<span>ID:</span>";
            buffer += "<span>"+element.id+"</span>";
            buffer += "</br>";
            buffer += "<span>Name:</span>";
            buffer += "<span>"+element.name+"</span>";
            buffer += "</br>";
            buffer += "<span>Role:</span>";
            buffer += "<span>"+element.role+"</span>";
            buffer += "</br>";
            buffer += "<span>Description:</span>";
            buffer += "<span>"+element.description+"</span>";
            buffer += "</br>";
            buffer += "</div>";
        }

    });

    res.send(buffer);
});

server.listen(4333, console.log(`server is listening on 4333`));

