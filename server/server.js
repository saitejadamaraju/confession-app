import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/user.routes.js";

//code from here

const PORT = process.env.PORT || 5000;
dotenv.config()

//creating express app
const app=express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user/',authRoutes);

//listening app on PORT
app.listen(PORT,()=>
{
    connectToMongoDB();
    console.log(`server is running at PORT ${PORT}`)
})