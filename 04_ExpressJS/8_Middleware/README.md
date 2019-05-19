

This is an example of using middleware in NodeJS

> you can start server by `ts-node server.ts` command or can build with `tsc` and run by `node server.js`

Middleware can be use especially for that usage :

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware 

# Application level middleware

```Typescript
server.use('/', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})
```

# Error handling middleware

```Typescript
server.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
```
