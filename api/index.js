import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//connecting do mongoDb database
mongoose
  .connect(process.env.MONGO) //Mongo is the connection string
  .then(() => {
    //if connected successfully log it 
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    //else log error
    console.log(err);
  });

const app = express();

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
