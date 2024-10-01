import express, { urlencoded } from "express"
import { connectToDB } from "./utils/db.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import { userRouter } from "./routes/userRoute.js";
const app = express()

const port = 3000

app.get("/", (req, res) => {
    res.send("Hello moto")
})

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use("/api/auth", userRouter)

connectToDB()

// sendMail("salmanshaikhmr.smarty@gmail.com", "Welcome to my portfolio")

app.listen(port, () => {
    console.log(`Server is runnnin at port ${port}`)
})