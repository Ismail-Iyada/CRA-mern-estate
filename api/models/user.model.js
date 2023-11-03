// Importing mongoose library
import mongoose from "mongoose";

// Creating a new mongoose schema for the user model
const userSchema = new mongoose.Schema(
    {
        // Defining the username field with type String, required and unique
        username: {
            type: String,
            required: true,
            unique: true,
        },
        // Defining the email field with type String, required and unique
        email: {
            type: String,
            required: true,
            unique: true,
        },
        // Defining the password field with type String and required
        password: {
            type: String,
            required: true,
        },
    },
    // Adding timestamps to the schema,  The timestamps option is set to true, which means that Mongoose will automatically add createdAt and updatedAt fields to the model
    { timestamps: true }
);

// Creating a new mongoose model for the user schema
const User = mongoose.model("User", userSchema);

// Exporting the User model
export default User;

