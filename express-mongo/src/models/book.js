import mongoose from "mongoose";
import { authorSchema } from "./author.js";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title of book is required"] },
    publisher: { type: String, required: [true, "Publisher of book is required"] },
    price: { type: Number},
    pages: { type: Number},
    author: authorSchema
}, {versionKey: false});

const book = mongoose.model("Book", bookSchema);

export default book;