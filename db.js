const {MongoClient, ObjectId} = require("mongodb")
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;
const secretKey = process.env.SECRET_KEY;


function conectar(){
    return MongoClient.connect(mongoURI);
    
}

function invitados(){
    return new Promise(async callback => {
        let conexion = await conectar();

        let coleccion = conexion.db("weddin2024").collection("invitados");

        let invitados = await coleccion.find({}).toArray();

        conexion.close();

        callback(invitados);
    })
}


module.exports = {invitados};