const express = require('express');
const app = express();

const PORT =  3000
const cursos = require('./recursos/cursos')
// La ruta raíz
app.get('/', (req, res) => {
res.send('¡Hola, mundo. Hola, Node.js!'); 
});


app.get('/cursosAll', (req, res) => {
  res.json(cursos); 
});

// Query Params 
app.get('/cursos', (req, res) => {
    const queryParams = Object.keys(req.query)
    if (queryParams.length > 0) {
        let resultado = [];
        for (let curso of cursos) {
            if ( curso.nombre.toLowerCase().includes(req.query.nombre.toLowerCase()) 
                || curso.categoria.toLowerCase().includes(req.query.categoria.toLowerCase())) {
                    resultado.push(curso)
                }
        }
        resultado.length > 0 ? 
            res.json(resultado) : 
            res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
        } else{
        res.json(cursos); 
    }
});

// url params
app.get('/cursos/:categorias', (req, res) => {
    let parametro = req.params.categorias.trim().toLowerCase();
    if (parametro !== ''){
        let resultado = []
        for (let curso of cursos) {
            if (curso.categoria.toLowerCase() === parametro) {
                resultado.push(curso)
            }
        }
        resultado.length > 0 ?
        res.json(resultado) :  
        res.json([{id: 'Error', descripcion: 'No se encontraron coincidencias.'}]);
    } 
});
// Ruta predeterminada para manejar rutas inexistentes
app.get('*', (req, res) => {
  res.status(404).send('Lo siento, la página que buscas no existe.'); 
});

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });