import  express from "express";
import mongoose from "mongoose";
import router from "./routes/user.js";
import { connectionDB } from "./db&Data/database.js";
import { config } from "dotenv";
import cors from "cors";
export const app=express();

app.use(cors({
    origin:[process.env.Forntend],
    methods:['GET',"POST","PUT","DELETE"],
    credentials:true,
}
));


app.use(express.json())
app.use(router);


config({
    path:"./db&Data/config.env",
});




router.get('/',(req,resp)=>{
    resp.send("no");
})













