import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuth=async(req,resp,next)=>{
const {token}=req.cookies;
console.log(token);
if(!token){
    return resp.status(404).json({
        success:true,
        message:"login first",
    });}

    const decoded=jwt.verify(token,process.env.JWT_CODE);
    req.user=await User.findById(decoded._id);


};