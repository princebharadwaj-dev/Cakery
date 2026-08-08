import express from "express"
import { adminLogin, googleLogin, login, logout, singUp, } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/signup', singUp)
authRouter.post('/login',login)
authRouter.get('/logout', logout)
authRouter.post('/googleAuth', googleLogin)
authRouter.post('/adminlogin',adminLogin)

export default authRouter