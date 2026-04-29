import express from 'express';

const app = express();
app.use(express.json()); //Middleware para interpretar o corpo da requisição como JSON

const books = [
    {
        id: 1,
        title: "Lord of the Rings"
    },
    {
        id: 2,
        title: "The Hobbit"
    }
]

function getBookById(id) {
    return books.findIndex((book) => book.id === Number(id)); 
}


app.get("/'", (req, res) => {
    res.status(200).send('Curse of Node.js');
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

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