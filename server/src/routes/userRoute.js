import express from "express"
import { sendMail } from "../controllers/userController.js"
// import { sendMail } from "../helpers/sendMail.js"

export const userRouter = express.Router()

userRouter.post("/send-message", sendMail)