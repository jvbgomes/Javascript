import mongoose from "mongoose";
import "dotenv/config";

async function connectDB() {
    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
}

export default connectDB;

