import express from "express";
import usuarios from './UsuarioRoutes.js'
import testes from './testeRoutes.js'
import perguntas from './perguntaRoutes.js'

const routes = (app) => {
    app.route('/').get((req,res) => {
        res.status(200).send({titulo: "funcionando"})
    })

    app.use(
        express.json(),
        usuarios,
        testes,
        perguntas
    )
}

export default routes