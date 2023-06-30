import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@cluster0.bovay4l.mongodb.net/Jogo_teste");

let db = mongoose.connection;

export default db;