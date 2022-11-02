const express = require("express");
const ContatoController = require("../controllers/contatoController.js");

const router = express.Router();

router.get("/contatos", ContatoController.listarContatos);

router.get("/contatos/:id", ContatoController.consultarPeloId);

router.post("/contatos", ContatoController.criarContato);

router.put("/contatos/:id", ContatoController.atualizarContato);

router.delete("/contatos/:id", ContatoController.removerContato);

module.exports = router;
