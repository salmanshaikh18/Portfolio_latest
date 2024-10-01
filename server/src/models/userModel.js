import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "user name is required to send message!"]
    },
    userEmail: {
        type: String,
        required: [true, "user email is required to send message!"]
    },
    message: {
        type: String,
        required: [true, "message is required to send message!"]
    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)