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

// this is an error handling middleware
app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  // for example if an error happens ? (tried to create account with 
  // same/duplicate email?) the server/preview error gonna be like this
  // {
  // 	"success": false,
  // 	"statusCode": 500,
  //	"message": "E11000 duplicate key error collection: mern-estate.
  //  users index: username_1 dup key: { username: \"hgugugug\" }"
  // }
  return res.status(statusCode).json({
    success : false,
    statusCode,
    message,
  })
})