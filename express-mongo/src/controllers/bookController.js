import book from "../models/book.js";

class bookController {
    //we use static methods cause we dont need to instantiate the class to use them, we can do bookController.getBooks()
    static async getBooks(req, res) {
        const booklist = await book.find({}); //find() come from mong., return a list of all books registered in the DB
        res.status(200).json(booklist);
    };

    static async createBook(req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "The book was added successfully", book: newBook });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - failed to create the book` });
        }
    };

};

export default bookController;
