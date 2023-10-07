import { Task } from "../models/Task.js";

export const newTask=async(req,resp)=>{
    
    const {title,dis}=req.body;
    console.log(req.body);
await Task.create({
    title,
    dis,
   user:req.user,

})
    resp.status(200).json({
        success:true,
        message:"got this",
    });

}