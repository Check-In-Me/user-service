import { Request, Response } from "express";


//register client user
export const register = async (req: Request, res: Response) => {

    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Require all fields" });
        }

        const existing = await User
    }catch(error){

    }
    
}