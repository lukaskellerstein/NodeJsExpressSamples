Example with routing params. List of users and detail of user.

> you can start server by `npm start` command

##List of users

```Typescript
server.get('/users', (req, res) => {

    let users = new Users();
    let buffer = "";

    users.items.forEach(element => {
        buffer += "<a href='/user/" + element.id + "'>" + element.name + "</a> </br>";
    });

    res.send(buffer);
});
```

##Detail of user

```Typescript
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
```