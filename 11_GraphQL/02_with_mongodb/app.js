import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./graphql/resolvers/todo.resolvers";
import { typeDefs } from "./graphql/schemas/todo.schema";

// ------------------------------------------------------------------------
// MongoDB connect
// ------------------------------------------------------------------------

//Set up default mongoose connection
mongoose.connect("mongodb://127.0.0.1/test-database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
var db = mongoose.connection;
db.once("open", function () {
  console.log("Connected successfully");
});
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// ------------------------------------------------------------------------
// GraphQL + Apollo server + Express
// ------------------------------------------------------------------------
const app = express();

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  )
);
