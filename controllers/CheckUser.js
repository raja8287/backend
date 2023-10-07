import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";
import { sendCooki } from "../util/feature.js";
export const checUser=async(req,resp)=>{

const {name,email,password}=req.body;
    let ra=await User.findOne({email});
    
    if(ra) return resp.status(404).json({
        success:false,
        message:"User allready exist"

    })
    const hasedpass=await bcrypt.hash(password,10)

ra=  await User.create({
        name,
        email,
        password:hasedpass
    });
sendCooki(ra,resp,201);

};