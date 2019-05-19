Example with serving static files.

> you can start server by `npm start` command


## Add serving of static files

```Typescript
server.use(express.static('../images'));
```

## Use this static files in template

```HTML
<img src="{{id}}.png" alt="">
```