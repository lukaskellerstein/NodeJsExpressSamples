# Description

The simplest implementation of GraphQL server.

We are using `apollo-server-express` (instead of `express-graphql`) because it is more popular (https://www.npmtrends.com/apollo-server-vs-express-graphql-vs-graphql-yoga-vs-prisma-vs-apollo-server-express)

## Technologies

JS
GraphQL + static file as storage (list.json)

## Queries + Mutations used in UI

http://localhost:4000/graphql

```
query MyGetAll {
  list {
    id
    title
    description,
    priority
  }
}

mutation MyCreateOne($title: String, $description: String) {
  createItem(title: $title, description: $description) {
    id
    title
  }
}
```
