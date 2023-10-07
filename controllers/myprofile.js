import { User } from "../models/User.js";

export const myprofile=async(req,resp)=>{
const id=req.body.id;
    const user=await User.findById(id);
console.log(user);
if(!user){
return resp.json({
    success:false,
    message:"noting it",
        });

    }




        resp.status(200).json({
            success:true,
            message:req.user,
                });

};