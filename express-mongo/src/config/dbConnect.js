import mongoose, { mongo } from "mongoose";

async function connectDB() {
    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
}

export default connectDB;

