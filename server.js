import { app } from "./app.js";
import { connectionDB } from "./db&Data/database.js";
connectionDB();
console.log(process.env.PORT);
app.listen(process.env.PORT,()=>{
  
    console.log(`server is runing on port ${process.env.PORT} is ${process.env.NODE_ENV} mode`);  
    })