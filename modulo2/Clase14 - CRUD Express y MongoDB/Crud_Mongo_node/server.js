// servidor 
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3000;
// incluyo funciones declaradas en mongoDb.js
const { connectToMongoDB, disconnectToMongoDB} = require('./src/mongoDb')

// para evitar TypeError: Cannot read property '_id' of undefined
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
app.use((req, res, next) => {
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

app.get('/', (req, res) => {
    res.status(200).end("Bienvenido a mi API de frutas!" );
});
// GET
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
app.get('/frutas/nombre/:nombre', async (req, res) => {
    const nombreFruta = req.params.nombre
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const regex = new RegExp(nombreFruta.toLowerCase(), 'i');
    console.log(regex)
    const db = client.db('productos')
    const frutas = await db.collection('frutas').find({ nombre: regex }).toArray()
    await disconnectToMongoDB()
    frutas.length == 0 ? res.status(404).send('No encontre la fruta con el nombre '+ nombreFruta): res.json(frutas)
})
app.get('/frutas/precio/:precio', async (req, res) => {
    const precioFruta = parseInt(req.params.precio) || 0
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('productos') 
    // gte: mayor o igual a
    const frutas = await db.collection('frutas').find({ importe: { $gte: precioFruta } }).toArray()
    await disconnectToMongoDB()
    frutas.length == 0 ? res.status(404).send('No encontre la fruta con el precio '+ precioFruta): res.json(frutas)
})

// POST
app.post('/frutas',async (req, res) => {
    const nuevaFruta = req.body
    console.log(req.body)
    if (!nuevaFruta) {
        res.status(400).send('Error en el formato de los datos de la fruta')
    }
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('productos') 
    const collection = await db.collection('frutas')
    collection.insertOne(nuevaFruta)
    .then(() => {
        console.log('Nueva fruta creada')
        res.status(201).send(nuevaFruta)
    }).catch(err => { 
        console.error(err)
        res.status(500).send('Error al crear')
    }).finally(async () => { await disconnectToMongoDB() })
})

// PUT
app.put('/frutas/:id',async (req, res) => {
    const id = req.params.id
    const nuevosDatos = req.body
       console.log(req.body)
    if (!nuevosDatos) {
        res.status(400).send('Error en el formato de los datos de la fruta')
    }
    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('productos') 
    const collection = await db.collection('frutas')
    collection.updateOne({id: parseInt(id)}, {$set: nuevosDatos})

    // primero busca y si lo encuetra actualiza
    // collection.findOneAndUpdate({id: parseInt(id)}, {$set: nuevosDatos})
    .then(() => {
        console.log('Nueva fruta actualizada')
        res.status(200).send(nuevosDatos)
    }).catch(err => { 
        console.error(err)
        res.status(500).send('Error al actualizar')
    }).finally(async () => { await disconnectToMongoDB() })
})
// Delete
app.delete('/frutas/:id',async (req, res) => {
    const id = req.params.id

    const client = await connectToMongoDB();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
    const db = client.db('productos') 
    const collection = await db.collection('frutas')
    collection.deleteOne({id: parseInt(id)})
    // borrar de a muchos
    // collection.deleteMany({id: parseInt(id)})
    .then(() => {
        console.log('Fruta eliminada')
        res.status(200).send('Fruta eliminada')
    }).catch(err => { 
        console.error(err)
        res.status(500).send('Error al eliminar')
    }).finally(async () => { await disconnectToMongoDB() })
})

app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
//Inicia el servidor
app.listen(PORT, () => console.log(`API de frutas escuchando en http://localhost:${PORT}`) );
  