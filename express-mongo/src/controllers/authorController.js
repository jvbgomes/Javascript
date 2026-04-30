import { author } from "../models/author.js";
import NotFound from "../errors/notFound.js";

class AuthorController {
    static async getAuthors(req, res, next) {
        try {
            const authors = await author.find({});
            res.status(200).json(authors);
        } catch (error) {
            next(error);
        }
    }

    static async getAuthorById(req, res, next) {
        try {
            const id = req.params.id;
            const foundAuthor = await author.findById(id);

            if (foundAuthor !== null) {
                res.status(200).json(foundAuthor);
            } else {
                next(new NotFound("The ID of the author was not found."));
            }
        } catch (error) {
            next(error);
        }
    }

    static async createAuthor(req, res, next) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "The author was added successfully", author: newAuthor });
        } catch (error) {
            next(error);
        }
    }

    static async updateAuthor(req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The author was updated successfully" });
        } catch (error) {
            next(error);
        }
    }

    static async deleteAuthor(req, res, next) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "The author was deleted successfully" });
        } catch (error) {
            next(error);
        }
    }
}

export default AuthorController;
