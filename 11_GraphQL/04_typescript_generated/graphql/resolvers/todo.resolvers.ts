import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../mongodb/mongo-schema";

export const resolvers = {
  Query: {
    list: async (
      root: any, // rootValue
      args: any, // no arguments
      ctx: any // context
    ) => {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const result = await Todo.find();
        console.log("RESULT - LIST", result);
        return result;
      } catch (err) {
        console.log("ERROR - LIST:", err);
      }
    },
    one: async (
      root: any, // rootValue
      args: { id: string }, // args
      ctx: any // context
    ) => {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const result = await Todo.findOne({ id: args.id });
        console.log("RESULT - LIST", result);
        return result;
      } catch (err) {
        console.log("ERROR - LIST:", err);
      }
    },
  },
  Mutation: {
    async createItem(
      root: any, // rootValue
      // { title, description }: { title: string; description: string }, // args var1
      // OR
      args: { title: string; description: string }, // args var2
      // OR
      // args: any, // args var3
      ctx: any // context
    ) {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const result = await Todo.create({
          id: uuidv4(),
          // title,
          // description,
          // OR
          title: args.title,
          description: args.description,
          priority: Math.floor(Math.random() * 10),
        });
        console.log("RESULT - CREATE:", result);
        return result;
      } catch (err) {
        console.log("ERROR - CREATE:", err);
      }
    },
    async updateItem(
      root: any, // rootValue
      args: { id: string; title: string; description: string }, // args
      ctx: any // context
    ) {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const resultFind = await Todo.findOne({ id: args.id });
        if (resultFind) {
          resultFind.title = args.title;
          resultFind.description = args.description;

          const result = await resultFind.save();
          console.log("RESULT - UPDATE:", result);
        }
        return null;
      } catch (err) {
        console.log("ERROR - UPDATE:", err);
      }
    },
    async deleteItem(
      root: any, // rootValue
      args: { id: string }, // args
      ctx: any // context
    ) {
      console.log("rootValue", root);
      console.log("args", args);
      console.log("context", ctx);
      try {
        const resultFind = await Todo.findOne({ id: args.id });
        if (resultFind) {
          const result = await resultFind.delete();
          console.log("RESULT - DELETE:", result);
          if (result) {
            return `Todo with ID: ${args.id} was successfully deleted`;
          } else {
            return `Todo with ID: ${args.id} not found`;
          }
        }
      } catch (err) {
        console.log("ERROR - DELETE:", err);
      }
    },
  },
};
