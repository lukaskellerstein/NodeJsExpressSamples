import { v4 as uuidv4 } from "uuid";
import { Todo } from "../../mongodb/mongo-schema";

export const resolvers = {
  Query: {
    list: async () => {
      try {
        const result = await Todo.find();
        console.log("RESULT - LIST", result);
        return result;
      } catch (err) {
        console.log("ERROR - LIST:", err);
      }
    },
  },
  Mutation: {
    async createItem(_, { title, description }) {
      try {
        const result = await Todo.create({
          id: uuidv4(),
          title,
          description,
          priority: Math.floor(Math.random() * 10),
        });
        console.log("RESULT - CREATE:", result);
        return result;
      } catch (err) {
        console.log("ERROR - CREATE:", err);
      }
    },
    async updateItem(_, { id, title, description }) {
      try {
        const resultFind = await Todo.findOne({ id: id });
        if (resultFind) {
          resultFind.title = title;
          resultFind.description = description;

          const result = await resultFind.save();
          console.log("RESULT - UPDATE:", result);
        }
        return null;
      } catch (err) {
        console.log("ERROR - UPDATE:", err);
      }
    },
    async deleteItem(_, { id }) {
      try {
        const resultFind = await Todo.findOne({ id: id });
        if (resultFind) {
          const result = await resultFind.delete();
          console.log("RESULT - DELETE:", result);
          if (result) {
            return `Todo with ID: ${id} was successfully deleted`;
          } else {
            return `Todo with ID: ${id} not found`;
          }
        }
      } catch (err) {
        console.log("ERROR - DELETE:", err);
      }
    },
  },
};
