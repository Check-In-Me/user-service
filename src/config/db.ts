import mongoose from 'mongoose';

const connetcDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL as string);
        console.log(`MongoDb connected: ${conn.connection.host}`);
    }catch(error){
        console.log("Error while connecting MongoDB",error);
        process.exit(1);
    }
}

export default connetcDB;