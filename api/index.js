import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
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

app.use(express.json())

app.listen(5000, () => {
  console.log("server is running on port 5000");
});


app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)