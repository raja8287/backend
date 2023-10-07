import express from "express";
import { newTask } from "../controllers/Task.js";
import { isAuth } from "../midelwate/auth.js";
const router=express.Router();

router.post("/newtask",newTask);