import * as express from "express";

export var myrouter = express.Router({
    mergeParams: true
})

myrouter.all('/', function(req,res,next){
    console.log("ALL /user");
    next();
})

myrouter.get('/', function(req,res,next){
    console.log("GET /user");
    res.send("GET /user")
})

myrouter.put('/', function(req,res,next){
    console.log("PUT /user");
    res.send("PUT /user")
})

myrouter.post('/', function(req,res,next){
    console.log("POST /user");
    res.send("POST /user")
})

myrouter.delete('/', function(req,res,next){
    console.log("DELETE /user");
    res.send("DELETE /user")
})
