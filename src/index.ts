import express, { type Application } from 'express';
import dotenv from "dotenv";
import connetcDB from './config/db.ts';


dotenv.config();
connetcDB(); 

const app: Application = express();
const port = process.env.PORT || 5000;



//middleware
app.use(express.json());

//health check
app.get("/", (req,res)=>{
    res.send(`User service is running on: ${port}`);
});

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});