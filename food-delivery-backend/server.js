import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import 'dotenv/config'

const app = express();
const port = 4000
app.use(express.json())
app.use(cors())

connectDB()

//api end points
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get("/",(req,res,next)=>{

    res.send(" Api Working")
})

app.listen(4000,()=>{
    console.log("Server Running on Port Number 4000")
})









