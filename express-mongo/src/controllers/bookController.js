import book from "../models/book.js";
import { author } from "../models/author.js";
import NotFound from "../errors/notFound.js";

class BookController {
    static async getBooks(req, res, next) {
        try {
            const books = await book.find({});
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    }

    static async getBookById(req, res, next) {
        try {
            const id = req.params.id;
            const foundBook = await book.findById(id);

            if (foundBook !== null) {
                res.status(200).json(foundBook);
            } else {
                next(new NotFound("The ID of the book was not found."));
            }
        } catch (error) {
            next(error);
        }
    }

    static async createBook(req, res, next) {
        const newBook = req.body;
        try {
            const foundAuthor = await author.findById(newBook.author);

            if (foundAuthor === null) {
                throw new NotFound("Author not found.");
            }

            const completeBook = { ...newBook, author: { ...foundAuthor._doc } };
            const createdBook = await book.create(completeBook);
            res.status(201).json({ message: "The book was added successfully", book: createdBook });
        } catch (error) {
            next(error);
        }
    }

    static async updateBook(req, res, next) {
        try {
            const id = req.params.id;
            const updatedBook = await book.findByIdAndUpdate(id, req.body);

            if (updatedBook === null) {
                return next(new NotFound("The ID of the book was not found."));
            }

            res.status(200).json({ message: "The book was updated successfully" });
        } catch (error) {
            next(error);
        }
    }

    static async deleteBook(req, res, next) {
        try {
            const id = req.params.id;
            const deletedBook = await book.findByIdAndDelete(id);

            if (deletedBook === null) {
                return next(new NotFound("The ID of the book was not found."));
            }

            res.status(200).json({ message: "The book was deleted successfully" });
        } catch (error) {
            next(error);
        }
    }

    static async getBooksByPublisher(req, res, next) {
        const publisher = req.query.publisher;
        try {
            const booksByPublisher = await book.find({ publisher });

            if (booksByPublisher.length === 0) {
                return next(new NotFound("No books found for this publisher."));
            }

            res.status(200).json(booksByPublisher);
        } catch (error) {
            next(error);
        }
    }
}

export default BookController;
