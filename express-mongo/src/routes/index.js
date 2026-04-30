import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curse of Node.js");
    });

    app.use(books, authors);
};

export default routes;
