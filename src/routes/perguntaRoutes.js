import express  from "express";
import perguntaController from "../api/controllers/perguntaController.js";



const router = express.Router()

router
    .get('/perguntas', perguntaController.listarPergunta)
    .get('/perguntas/:id', perguntaController.listarPerguntaPorId)   
    .post('/perguntas', perguntaController.criarPergunta)
    .put('/perguntas/:id', perguntaController.AtualizarPergunta)
    .delete('/perguntas/:id', perguntaController.excluirPergunta)

export default router