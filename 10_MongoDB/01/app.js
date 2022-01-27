//Import the mongoose module
import { LoremIpsum } from "lorem-ipsum";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./mongo-schema";

// ------------------------------------------------------------------------
// MongoDB connect
// ------------------------------------------------------------------------

//Set up default mongoose connection
mongoose.connect("mongodb://127.0.0.1/test_database", {
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
// Random texts = Lorem Ipsum
const lorem = new LoremIpsum();
// Random id
const id = uuidv4();

// ------------------------------------------------------------------------
// CREATE (via save() on instance)
// ------------------------------------------------------------------------

const TestCreate = async () => {
  try {
    const record = new Todo({
      id: id,
      title: lorem.generateWords(1),
      description: lorem.generateSentences(1),
      priority: Math.floor(Math.random() * 10),
    });

    const result = await record.save();
    console.log("RESULT - CREATE:", result);
  } catch (err) {
    console.log("ERROR:", err);
  }
};
TestCreate();

// ------------------------------------------------------------------------
// CREATE (via create() static method)
// ------------------------------------------------------------------------

const TestCreate2 = async () => {
  try {
    const res = await Todo.create({
      id: uuidv4(),
      title: lorem.generateWords(1),
      description: lorem.generateSentences(1),
      priority: Math.floor(Math.random() * 10),
    });
    console.log("RESULT - CREATE2:", res);
  } catch (err) {
    console.log("ERROR:", err);
  }
};
TestCreate2();

// ------------------------------------------------------------------------
// GET
// ------------------------------------------------------------------------

const TestGet = async () => {
  try {
    const resultFind = await Todo.findOne({ id: id });
    console.log("RESULT - FIND", resultFind);
  } catch (err) {
    console.log("ERROR:", err);
  }
};
TestGet();

// ------------------------------------------------------------------------
// UPDATE (via find and update = LESS EFECTIVE)
// ------------------------------------------------------------------------

// const TestUpdate = async () => {
//   try {
//     const resultFind = await Todo.findOne({ id: id });
//     if (resultFind) {
//       resultFind.title = "CHANGED TITLE";

//       const result = await resultFind.save();
//       console.log("RESULT - UPDATE:", result);
//     }
//   } catch (err) {
//     console.log("ERROR:", err);
//   }
// };
// TestUpdate();

// ------------------------------------------------------------------------
// UPDATE (via updateOne = MORE EFFECTIVE - only one call to the DB)
// doesn't return the object !! only perform the update
// ------------------------------------------------------------------------

const TestUpdate2 = async () => {
  try {
    await Todo.updateOne(
      { id: id },
      { $set: { title: "CHANGED TITLE AGAIN" } }
    );
  } catch (err) {
    console.log("ERROR:", err);
  }
};
TestUpdate2();

// ------------------------------------------------------------------------
// DELETE (via find and delete = LESS EFECTIVE)
// ------------------------------------------------------------------------

// const TestDelete = async () => {
//   try {
//     const resultFind = await Todo.findOne({ id: id });
//     if (resultFind) {
//       const result = await resultFind.delete();
//       console.log("RESULT - DELETE:", result);
//     }
//   } catch (err) {
//     console.log("ERROR:", err);
//   }
// };

// TestDelete();

// ------------------------------------------------------------------------
// DELETE (via deleteOne = MORE EFFECTIVE - only one call to the DB)
// doesn't return the object !! only perform the delete
// ------------------------------------------------------------------------

const TestDelete2 = async () => {
  try {
    await Todo.deleteOne({ id: id });
  } catch (err) {
    console.log("ERROR:", err);
  }
};

TestDelete2();
