import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
export const getallusers=async(req,resp)=>{

    const Users=await User.find({});
    console.log(req.query);
    
        resp.json({
            success:true,
            Users,
        });
    
    }