import { v1 as uuidv1 } from "uuid";

const todoList = require("../../list.json");

export const resolvers = {
  Query: {
    list: () => todoList.items,
  },
  Mutation: {
    createItem(_, { title, description }) {
      const item = { id: uuidv1(), title, description };
      todoList.items.push(item);
      return item;
    },
    updateItem(_, { id, title, description }) {
      const item = todoList.items.find((i) => i.id === id);
      if (item) {
        item.title = title;
        item.description = description;
        return item;
      }
      throw new Error("Id not found");
    },
    deleteItem(_, { id }) {
      const idx = todoList.items.findIndex((i) => i.id === id);
      if (idx !== -1) {
        todoList.items.splice(idx, 1);
        return `Item ${id} deleted with success`;
      }
      throw new Error("Id not found");
    },
  },
};
