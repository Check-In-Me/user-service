import { Request, Response } from "express";
import User from "../models/userModel";


//register client user
export const register = async (req: Request, res: Response) => {

    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Require all fields" });
        }

        const existing = await User.findOne({email});
        if(existing){
            return res.status(400).json({message: "email already registered"});
        }

        console.log(req.body);

        const user = await User.create({
            name,
            email,
            password,
            role: role || "user",
            kycStatus: "pending"
        });

        console.log("User created",user);
        return res.status(500).json({message:"User created successfully"});

        
    }catch(error){

    }
    
}