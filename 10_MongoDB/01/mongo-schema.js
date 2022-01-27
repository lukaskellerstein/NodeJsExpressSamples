import mongoose from "mongoose";

export const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    default: 0,
  },
});

export const Todo = mongoose.model("Todo", TodoSchema);
