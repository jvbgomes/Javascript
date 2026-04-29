import book from "../models/book.js";

class bookController {
    //we use static methods cause we dont need to instantiate the class to use them, we can do bookController.getBooks()
    static async getBooks(req, res) {
        try {
            const booklist = await book.find({}); //find come from mong., return a list of all books registered in the DB
            res.status(200).json(booklist);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to retrieve the books` });
        }
    };

    static async getBookById(req, res) {
        try {
            const id = req.params.id;
            const booklist = await book.findById(id);
            res.status(200).json(booklist);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to retrieve the book` });
        }
    };

    static async createBook(req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "The book was added successfully", book: newBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to create the book` });
        }
    };

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The book was updated successfully"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to update the book` });
        }
    };

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "The book was deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - failed to delete the book` });
        }
    };

};

export default bookController;
