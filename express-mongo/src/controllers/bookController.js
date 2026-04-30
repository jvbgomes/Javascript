import book from "../models/book.js";
import { author } from "../models/author.js";

class BookController {
    //we use static methods cause we dont need to instantiate the class to use them, we can do BookController.getBooks()
    static async getBooks(req, res, next) {
        try {
            const books = await book.find({}); //find come from mong., return a list of all books registered in the DB
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    };

    static async getBookById(req, res, next) {
        try {
            const id = req.params.id;
            const foundBook = await book.findById(id);

            if (foundBook !== null) {
                res.status(200).json(foundBook);
            } else {
                res.status(404).json({ message: "The ID of the book was not found." });
            }
        } catch (error) {
            next(error);
        }
    };

    static async createBook (req, res, next) {
        const newBook = req.body;
        try {
            const foundAuthor = await author.findById(newBook.author);

            if (foundAuthor === null) {
                const err = new Error("Author not found.");
                err.status = 404;
                throw err;
            }
            
            const completeBook = { ...newBook, author: { ...foundAuthor._doc }};
            const createdBook = await book.create(completeBook);
            res.status(201).json({ message: "The book was added successfully", book: createdBook });
        } catch (error) {
            next(error);
        }
    };

    static async updateBook (req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "The book was updated successfully"});
        } catch (error) {
            next(error);
        }
    };

    static async deleteBook(req, res, next) {
        try {
            const id = req.params.id;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: "The book was deleted successfully" });
        } catch (error) {
            next(error);
        }
    };

    static async getBooksByPublisher(req, res, next) {
        const publisher = req.query.publisher;
        try {
            const booksByPublisher = await book.find({ publisher });
            res.status(200).json(booksByPublisher);
        } catch (error) {
            next(error);
        }
    };

};

export default BookController;
