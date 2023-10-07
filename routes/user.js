import express  from "express";
import mongoose from "mongoose";
import { User } from "../models/User.js";
import { getallusers } from "../controllers/getAllUsers.js";
import { addNewUser } from "../controllers/NewUser.js";
import { checUser } from "../controllers/CheckUser.js";
import { login } from "../controllers/login.js";
import { myprofile } from "../controllers/myprofile.js";
import { isAuth } from "../midelwate/auth.js";
import { logout } from "../controllers/logout.js";
const router=express.Router();

router.get('/users/all',getallusers);
router.get("/users/profile",isAuth,myprofile);
router.get("/users/logout",logout);

router.post("/users/check",checUser);
router.post("/users/new",addNewUser);//to for secure user
router.post("/users/login",login);






export default router;