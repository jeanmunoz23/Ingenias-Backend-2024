// servidor 
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3000;
// incluyo funciones declaradas en mongoDb.js
const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongoDb')

//Middleware

app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

app.get('/', (req, res) => {
    res.status(200).end("Bienvenido a mi API de frutas!" );
});
app.get('/frutas', async (req, res) => {
    const client = await connectToMongoDB();
    if(!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('productos')
    const frutas = await db.collection('frutas').find().toArray()
    await disconnectToMongoDB()
    res.status(200).json(frutas);
});
app.get('/frutas/:id', async (req, res) => {
    const frutaID = parseInt(req.params.id) || 0

    const client = await connectToMongoDB();
    if(!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    
    const db = client.db('productos')
    const fruta = await db.collection('frutas').findOne({id: frutaID})
    await disconnectToMongoDB()
    !fruta ? res.status(404).send('No encontre la fruta con el id '+ frutaID): res.status(200).json(fruta)
});

app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
//Inicia el servidor
app.listen(PORT, () => console.log(`API de frutas escuchando en http://localhost:${PORT}`) );
  