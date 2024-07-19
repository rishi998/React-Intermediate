import express from "express";
import { signup, login } from "../controller/user.controller.js";
const userRoute = express.Router();
userRoute.post("/signup", signup);
userRoute.post("/login", login);

export default userRoute;
