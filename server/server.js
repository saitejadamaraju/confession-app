import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/user.routes.js";
import confessionRoutes from "./routes/confession.routes.js";
import cors from "cors";
import path from 'path';
//code from here

const PORT = process.env.PORT || 5000;
dotenv.config()

const __dirname=path.resolve();
//creating express app
const app=express();

app.use(express.json());
app.use(cookieParser());

// Add CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Specify the origin you want to allow
    credentials: true,               // Allow cookies to be sent with requests
}));

app.use('/api/auth',authRoutes);
app.use('/api/user/confession',confessionRoutes);

app.use(express.static(path.join(__dirname,"/client/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"));
})

//listening app on PORT
app.listen(PORT,()=>
{
    connectToMongoDB();
    console.log(`server is running at PORT ${PORT}`)
})