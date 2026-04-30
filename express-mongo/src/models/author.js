import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, "Name of author is required"] },
        nacionality: { type: String },
    }, 
    {
        versionKey: false
    }
);    

const author = mongoose.model("Authors", authorSchema);

export { author, authorSchema };