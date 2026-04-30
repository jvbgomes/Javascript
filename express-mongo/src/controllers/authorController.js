import { author } from "../models/author.js";

class AuthorController {
    static async getAuthors(req, res) {
        try {
            const authorlist = await author.find({});
            res.status(200).json(authorlist);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to retrieve the authors` });
        }
    };

    static async getAuthorById(req, res) {
        try {
            const id = req.params.id;
            const authorlist = await author.findById(id);
            res.status(200).json(authorlist);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to retrieve the author` });
        }
    };

    static async createAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "The author was added successfully", author: newAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to create the author` });
        }
    };

    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The author was updated successfully"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update the author` });
        }
    };

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: "The author was deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete the author` });
        }
    };

};

export default AuthorController;
