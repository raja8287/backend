import mongoose from "mongoose";
export const connectionDB=()=>{
mongoose.connect(process.env.MONGO_URI,{
    dbName:"BackendApi",

}).then(()=>console.log("DB is connected")).catch((err)=>{
    console.log(err)
});}