import express  from "express";
import usuarioController from "../api/controllers/usuarioController.js";


const router = express.Router()

router
    .get('/usuarios', usuarioController.listarUsuario)
    .get('/usuarios/:id', usuarioController.listarUsuarioPorId)
    .post('/usuarios', usuarioController.criarUsuario)
    .put('/usuarios/:id', usuarioController.AtualizarUsuario)
    .delete('/usuarios/:id', usuarioController.excluirUsuario)

export default router;