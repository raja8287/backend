import  {User} from "../models/User.js";
import bcrypt from 'bcrypt';
import { sendCooki } from "../util/feature.js";

export const login=async(req,resp)=>{

    const {email,password}=req.body;
    const us=await User.findOne({email:email}).select("password");

    if(!us)
    return resp.status(404).json({
success:false,
message:"Invalid Email or password",
});
const isMatch=await bcrypt.compare(password,us.password);
if(!isMatch)
return resp.status(404).json({
    success:false,
    message:"Invalid Email or Password",
})
sendCooki(us,resp,200);
};