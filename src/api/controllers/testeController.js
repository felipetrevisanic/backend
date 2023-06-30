import testes from "../models/Teste.js"
import perguntas from "../models/Pergunta.js"

class testeController {

    static listarTeste = async (req, res) => {
        try {
            const listar = await testes.find()
                .populate('perguntas')
                .exec()
            res.status(200).json(listar)
        } catch (error) {
            res.status(500).send({ message: `${error} - não foi possivel realizar busca` })
        }
    }

    static listarTestePorId = async (req, res) => {
        const id = req.params.id
        try {
            const resultado = await testes.findById(id)
                .populate('perguntas')
                .exec()
            res.status(200).send(resultado)
        } catch (error) {
            res.status(500).send({ message: `${error} - não foi possivel realizar busca` })
        }
    }


    static criarTeste = async (req, res) => {
        let teste = new testes(req.body)
        try {
            teste.save()
            res.status(201).send(teste.toJSON())
        } catch (error) {
            res.status(500).send({ message: `${error} - não foi possivel inserir o teste` })
        }
    }

    static inserirPergunta = async (req, res) => {
        try {
            const testeId = req.params.id;
            const perguntaId = req.body.perguntas;
      
            const teste = await testes.findById(testeId);
            teste.perguntas = [...teste.perguntas, perguntaId];
            await teste.save();
      
            res.status(200).json(teste);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }
    }

    static AtualizarTeste = async (req, res) => {
        const id = req.params.id
        try {
            await testes.findByIdAndUpdate(id, { $set: req.body })
            res.status(200).send({ message: "teste atualizado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: `${error} - não foi possivel atulizar teste` })
        }
    }

    static excluirTeste = async (req, res) => {
        const id = req.params.id
        try {
            await testes.findByIdAndDelete(id)
            res.status(200).send({ message: `teste excluido com sucesso` })
        } catch (error) {
            res.status(500).send({ message: `${error} - não foi possivel excluir teste` })
        }
    }
}
export default testeController;