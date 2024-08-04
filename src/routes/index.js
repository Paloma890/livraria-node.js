import express from "express";
import livross from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>  res.status(200).send("Curso de Node.js"));
   
    app.use(express.json(), livross, autores);

};

export default routes;