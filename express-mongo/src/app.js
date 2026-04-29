import express from 'express';
import connectDB from './config/dbConnect.js';
import routes from './routes/index.js';

const connection = await connectDB();

connection.on("error", (err) => {
    console.error("Connection error:", err);
});

connection.once("open", () => {
    console.log("Database connected");
});

const app = express();
routes(app);

app.get("/books/:id", (req, res) => {
    const index = getBookById(req.params.id);
    if (index === -1) {
        res.status(404).send('Book not found');
    } else {
        res.status(200).json(books[index]);
    }
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("The book was added successfully");
});

//put vs patch: verificar a dif. --> put: substitui o recurso inteiro, patch: atualiza apenas um campo específico do recurso
app.put("/books/:id", (req, res) => {
    const index = getBookById(req.params.id);
    if (index === -1) {
        res.status(404).send('Book not found');
    } else {
        books[index].title = req.body.title;
        res.status(200).json(books);
    }
});

app.delete("/books/:id", (req, res) => {
    const index = getBookById(req.params.id);
    //splice remove um item do array a partir do indice e o n. de itens
    if (index === -1) {
        res.status(404).send('Book not found');
    } else {
        books.splice(index, 1);
        res.status(200).send('Book deleted successfully');
    }
});

export default app;