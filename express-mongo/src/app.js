import express from "express";
import connectDB from "./config/dbConnect.js";
import errorHandler from "./middlewares/errorHandler.js";
import routes from "./routes/index.js";

const connection = await connectDB();

connection.on("error", (err) => {
    console.error("Connection error:", err);
});
connection.once("open", () => {
    console.log("Database connected");
});

const app = express();
routes(app);

app.use(errorHandler);

export default app;