import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
export const addNewUser=async(req,reps)=>{


    const {name,email,password}=req.body;
    
        const ispresent= await User.find({email:email});
        console.log(ispresent);
if(!ispresent){

    const Users= await User.create({
        name,
        email,
        password,
    
        });
    reps.status(201).cookie("temp1","lol").json({
        success:true,
        message:"registed successfuly"
    })
  
}
   

    reps.json({
        success:false,
        message:"User already exists",
    })
}