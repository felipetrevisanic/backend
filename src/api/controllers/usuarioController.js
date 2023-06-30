import usuarios from "../models/Usuario.js";

class usuarioController {

    static listarUsuario = async (req,res) => {
        try {
            const listar = await usuarios.find()
            res.status(200).json(listar)
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel realizar busca`})
        }
    }

    static listarUsuarioPorId = async (req,res) => {
        const id = req.params.id
        try {
            const resultado = await usuarios.findById(id)
            res.status(200).send(resultado)
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel realizar busca`})
        }
    }


    static criarUsuario = async (req,res) => {
        let usuario = new usuarios(req.body)
        try {
            usuario.save()
            res.status(201).send(usuario.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel inserir o usuario`})
        }
    }

    static AtualizarUsuario = async (req,res) => {
        const id = req.params.id
        try {
            await usuarios.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: "Usuario atualizado com sucesso"})
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel atulizar usuario`})
        }
    }

    static excluirUsuario = async (req,res) => {
        const id = req.params.id
        try {
            await usuarios.findByIdAndDelete(id)
            res.status(200).send({message: `Usuario excluido com sucesso`})
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel excluir usuario`})
        }
    }
}

export default usuarioController;