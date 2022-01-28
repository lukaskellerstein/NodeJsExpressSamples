# Description

The implementation of GraphQL server.

We are using `apollo-server-express` (instead of `express-graphql`) because it is more popular (https://www.npmtrends.com/apollo-server-vs-express-graphql-vs-graphql-yoga-vs-prisma-vs-apollo-server-express)

## Technologies

TS
GraphQL + MongoDB

- we are using RootValue and Context for graphql resolvers
- documentation: https://www.apollographql.com/docs/apollo-server/api/apollo-server/

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

query MyGetOne($id: String) {
  one(id: $id) {
    id
    title
  }
}

mutation MyCreateOne($title: String, $description: String) {
  createItem(title: $title, description: $description) {
    id
    title
  }
}
```
