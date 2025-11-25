import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";

//register client user
export const register = async (req: Request, res: Response) => {

    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Require all fields" });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "email already registered" });
        }

        console.log(req.body);

        const user = await User.create({
            name,
            email,
            password,
            role: role || "user",
            kycStatus: "pending"
        });

        console.log("User created", user);

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in .env");
        }

        //JWT token 
        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: "90d" }
        );

         return res.status(201).json({
            message: "User created successfully",
            user,
            token,
        });


    } catch (error) {
        console.error("registerUser error:", error);
        res.status(500).json({ message: error.message });
    }

}