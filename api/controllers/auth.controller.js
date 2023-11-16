import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
const {username, email, password} = req.body;
const hashedPassword = bcryptjs.hashSync(password, 10)
const newUser = new User({username, email, password: hashedPassword})
try{
    await newUser.save()
    res.status(201).json("user created successfuly!!")
} catch(error){
    // creating custom error NOT neccessary for this case but,
    // in some cases we need to handle the error (ex : psw too short) 
    // next(errorHandler(550, 'error from the function (ana derto, not default)'))
    next(error)
}

}