import User from "../models/usermodel.js"
import validator from "validator"
import bcrypt from "bcryptjs"
import { genToken,genToken1 } from "../config/token.js"



export const singUp = async(req, res) => {
    try {
        const { name, email, password} = req.body

        if(!name || !email || !password) {
            return res.status(400).json({message: "All fields are required"})
        }

        const existingUser = await User.findOne({email})

        if(existingUser) {
            return res.status(400).json({message:"User already Exist"})
        }

        if(!validator.isEmail(email)) {
            return res.status(400).json({message:"Enter Valid Email"})
        }

        if(password.length < 6 ) {
            return res.status(400).json({message:"Enter a Strong Password"})
        }

        const hashePassword = await bcrypt.hash(password,10);

        const user = await User.create({name,email,password:hashePassword})

        const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log("Registration Error")
        return res.status(500).json({message:`Registration Error ${error}`})
    }
    
}

export const login = async(req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json("User Not Found")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            return res.status(400).json({message:"Incorrect Password"})
        }

        const token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge:7 * 24 * 60 * 60 * 100
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log("Login Error")
        return res.status(500).json({message:`Login Error ${error}`})
    }
}

export const logout = async(req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout Successful"})
    } catch (error) {
        console.log("Logout Error")
        return res.status(500).json({message:`Logout Error ${error}`})
    }
}



export const googleLogin = async (req,res) => {
    try {
        const {name , email} = req.body;
        const user = await User.findOne({email}) 
        if(!user){
          user = await User.create({
            name,email
        })
        }
       
        const token = await genToken(user._id)
        res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.status(200).json(user)

    } catch (error) {
         console.log("googleLogin error")
    return res.status(500).json({message:`googleLogin error ${error}`})
    }
    
}

export const adminLogin = async(req,res) => {
    try {
        const {email, password} = req.body
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = await genToken1(email)
        res.cookie("token", token, {
            httpOnly:true,
            secure:false,
            sameSite:"Strict",
            maxAge: 1 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(token)
    }
    return res.status(400).json({message:"Invalid Credentials"}) 

    } catch (error) {
        return res.status(500).json({message: `AdminLogin error ${error}`})
    }
}