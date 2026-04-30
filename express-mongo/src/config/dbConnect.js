import mongoose from "mongoose";

async function connectDB() {
    mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
}

export default connectDB;

