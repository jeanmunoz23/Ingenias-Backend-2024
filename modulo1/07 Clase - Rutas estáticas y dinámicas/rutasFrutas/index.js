const express = require('express');
const app = express();

const PORT =  3001
const frutas = require('./recursos/productos')
// La ruta raíz
app.get('/frutas', (req, res) => {
    res.json(frutas); 
});
// 1. “/frutas/codigo/:id”
app.get('/frutas/codigo/:id', (req, res) => {
    let codigo = parseInt(req.params.id)
    if (typeof codigo === 'number') {
        let result = []
        for (let fruta of frutas) {
            if (fruta.id === codigo) {
              result.push(fruta)
              break
            }
          }
        result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
    }
});
// 2. “/frutas/nombre/:nombre”
app.get('/frutas/nombre/:nombre', (req, res) => {
    let param = req.params.nombre.trim().toLowerCase()
    console.log("params", param)
    if (param !== '') {
        let result = []

        result = frutas.filter((fruta) => 
            fruta.nombre.includes(param)
        )
        result.length > 0 ? 
        res.json(result) :
        res.status(404).json({ id: 'Error', descripcion: 'No se encontraron coincidencias.' })
    }
});
// Ruta predeterminada para manejar rutas inexistentes
app.get('*', (req, res) => {
    res.status(404).send('Lo siento, la página que buscas no existe.'); 
  });
  
// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});