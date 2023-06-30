import mongoose, { SchemaTypes, SchemaType } from "mongoose";

const testeSchema = new mongoose.Schema(
    {
        id: {type: SchemaTypes.ObjectId},
        nome: {type: String},
        perguntas: [{type: SchemaTypes.ObjectId, ref: 'perguntas' }]
    },
    {
        versionKey: false
    }
)

const testes = mongoose.model('testes', testeSchema)

export default testes;