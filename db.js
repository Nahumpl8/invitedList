const {MongoClient, ObjectId} = require("mongodb")
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;
const secretKey = process.env.SECRET_KEY;
const dataBase = process.env.DATA_BASE;
const collection = process.env.COLLECTION;


function conectar(){
    return MongoClient.connect(mongoURI);
    
}

function invitados(){
    return new Promise(async callback => {
        let conexion = await conectar();

        let coleccion = conexion.db(dataBase).collection(collection);

        let invitados = await coleccion.find({}).toArray();

        conexion.close();

        callback(invitados);
    })
}


module.exports = {invitados};