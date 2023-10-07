
export const logout=async(req,resp,next)=>{
    resp.status(200).cookies("token","",({expires:Date.now()})).json({
        success:true,
        user:req.user,
    });

}