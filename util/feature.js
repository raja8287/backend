import Jwt from "jsonwebtoken";


export const sendCooki=(ra,resp,code)=>{

    const token= Jwt.sign({_id:ra._id},process.env.JWT_CODE);

resp.status(code).cookie("token",token,{
    httpOnly:true,
    maxage:15*60*1000,
    sameSite:process.env.NODE_ENV==="Develpoment" ? "lax" :"none",
    secure:process.env.NODE_ENV==="Develpoment" ? false : true,
}).json({

    success:true,
    message:"registede successfuly",
});

};