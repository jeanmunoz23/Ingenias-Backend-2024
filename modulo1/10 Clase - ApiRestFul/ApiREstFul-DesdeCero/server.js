const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

//MIDDLEWARE 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const { leerFrutas } = require('./src/frutas.controller');
const PORT = process.env.PORT || 3000;
let DB = [];
app.use((req,res,next)=>{
    DB = leerFrutas();
    next();
})





// SERVIDOR WEB
// metodo get generico
app.get('/', (req,res)=>{
    res.send(DB)
})

app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});