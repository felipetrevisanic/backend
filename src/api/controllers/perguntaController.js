import perguntas from "../models/Pergunta.js"

class perguntaController {

    static listarPergunta = async (req,res) => {
        try {
            const listar = await perguntas.find()
            res.status(200).json(listar)
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel realizar busca`})
        }
    }

    static listarPerguntaPorId = async (req,res) => {
        const id = req.params.id
        try {
            const resultado = await perguntas.findById(id)
            res.status(200).send(resultado)
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel realizar busca`})
        }
    }


    static criarPergunta = async (req,res) => {
        let pergunta = new perguntas(req.body)
        try {
            pergunta.save()
            res.status(201).send(pergunta.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel inserir o pergunta`})
        }
    }

    static AtualizarPergunta = async (req,res) => {
        const id = req.params.id
        try {
            await perguntas.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: "pergunta atualizado com sucesso"})
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel atulizar pergunta`})
        }
    }

    static excluirPergunta = async (req,res) => {
        const id = req.params.id
        try {
            await perguntas.findByIdAndDelete(id)
            res.status(200).send({message: `pergunta excluido com sucesso`})
        } catch (error) {
            res.status(500).send({message: `${error} - não foi possivel excluir pergunta`})
        }
    }
}

export default perguntaController;