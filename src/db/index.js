import Mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectionInstance = await Mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected !! DB HOST :${connectionInstance.connection.host}`);  
    } catch (error) {
        console.log("MONGODB connection error => ",error);
        throw error
    }
}

export default connectDB;