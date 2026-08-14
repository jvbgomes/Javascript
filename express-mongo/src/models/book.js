import mongoose from "mongoose";
import { authorSchema } from "./author.js";

const bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title of book is required"] 
    },
    publisher: { 
        type: String, 
        required: [true, "Publisher of book is required"],
        enum: {
            values: ["Casa do código", "Alura", "Bloomsbury", "Garnier"],
            message: "The publisher {VALUE} provided is not a permmited value"
        }
    },
    price: { 
        type: Number
    },
    pages: { 
        type: Number, 
        validate: {
            validator: (value) => {
                return value >= 10 && value <= 5000;
            },
            message: "It must be between 10 and 5000. Provided value: {VALUE}"
        }
    },
    author: authorSchema
}, {versionKey: false});

const book = mongoose.model("Book", bookSchema);

export default book;