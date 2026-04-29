import express from 'express';
import books from './booksRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send('Curse of Node.js');
    });

    app.use(express.json(), books); //Middleware para interpretar o corpo da requisição como JSON
};

export default routes;
