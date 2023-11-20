const express = require('express');
const {invitados} = require("./db.js")
const app = express();


let port = process.env.PORT;

app.use("/", express.static("./estaticos"));

app.get("/invitados", async (peticion, respuesta) => {
    respuesta.json(await invitados());
    console.log(invitados)
})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});