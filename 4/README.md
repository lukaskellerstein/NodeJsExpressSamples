Example with templating.

> you can start server by `npm start` command

## Install template engine - Handlebars

```Shell
npm install handlebars consolidate
```

## Use Handlebar template engine with express

```Typescript
server.set('views', './views');
server.set('view engine', 'hbs');
```

> 'hbs' = handlebars

## Add Consolidate engine with express

Add reference to library

```Typescript
import * as engines from "consolidate";
```

Set view engine

```Typescript
server.engine('hbs', engines.handlebars);
```

## Template syntax

```HTML
<h1>Users</h1>

<div id="users">
  {{#each users}}
  <a href="/user/{{id}}">{{name}}</a></br>
  {{/each}}
</div>
```