import mongoose, { SchemaTypes } from "mongoose";

const perguntaSchema = new mongoose.Schema(
    [ 
        {
        id: {type: SchemaTypes.ObjectId},
        pergunta: {type: String},
        opcaoA: {type: String},
        opcaoB: {type: String},
        opcaoC: {type: String},
        opcaoD: {type: String},
        opcaoE: {type: String},
        resposta: {type: String}
        }
    ]
)

const perguntas = mongoose.model('perguntas', perguntaSchema)

export default perguntas