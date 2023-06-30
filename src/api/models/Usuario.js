import mongoose, {Schema, SchemaType, SchemaTypes} from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id: {type: SchemaTypes.ObjectId},
        login: {type: String},
        pass: {type: String}
    },
    {
        versionKey: false
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema);

export default usuarios;