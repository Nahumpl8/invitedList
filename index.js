const express = require('express');
const {invitados} = require("./db.js")
const app = express();


const port = 3000;

app.use("/", express.static("./estaticos"));

app.get("/invitados", async (peticion, respuesta) => {
    respuesta.json(await invitados());
    console.log(invitados)
})


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});