import express from "express"
import testeController from "../api/controllers/testeController.js"

const router = express.Router()

router
    .get('/testes', testeController.listarTeste)
    .get('/testes/:id', testeController.listarTestePorId)
    .post('/testes', testeController.criarTeste)
    .post('/testes/:id', testeController.inserirPergunta)
    .put('/testes/:id', testeController.AtualizarTeste)
    .delete('/testes/:id', testeController.excluirTeste)

export default router;