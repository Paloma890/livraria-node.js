import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();


routes.get("/livross", LivroController.listarLivros);
routes.get("/livross/busca", LivroController.listarLivroPorId);
routes.get("/livross/:id", LivroController.listarLivroPorId);
routes.post("/livross", LivroController.cadastrarLivro);
routes.put("/livross/:id", LivroController.atualizarLivro);
routes.delete("/livross/:id", LivroController.excluirLivro);

export default routes;
