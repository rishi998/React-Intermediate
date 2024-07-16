import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
try {
  mongoose.connect("mongodb://localhost:27017/bookstore").then(() => {
    console.log("Connected to mongodb");
  });
} catch (error) {
  console.log("Error: ", error);
}

// connecting routes
app.use("/book", bookRoute);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
