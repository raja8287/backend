import mongoose  from "mongoose";


const schema=new mongoose.Schema({
    titel:{
        type:String,
        required:true,
    },
    dis:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
        
       
    },
   user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Data.now(),
    },

});

export const Task = mongoose.model("Task",schema);