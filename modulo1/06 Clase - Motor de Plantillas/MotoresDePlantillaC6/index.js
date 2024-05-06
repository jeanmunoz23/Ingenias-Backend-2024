const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('views'))

// La ruta raíz
app.get('/', (req, res) => {
  const data = {
    title: 'Mi sitio web en Ejs',
    message: 'Bienvenidas a mi sitio generado con motor de plantillas'
  }
  res.render('index', data);
  });

app.get('/productos', (req, res) => {
  const products = [
    {name: 'Leche', fecha: '23/04/2014'},
    {name: 'Jamon', fecha: '3/05/2024'},
    {name: 'Queso', fecha: '4/04/2024'},
  ]
  const data = {
    title: 'Nuestro sitio Productos',
    message: 'Bienvenido a nuestro sitio generado a partir de un motor de plantillas.',
    products
}
  res.render('productos', data)
});

//otra alternativa para manejar rutas inexistentes
app.use((req, res) => { 
  res.status(404).send('Lo siento, la página que buscas no existe.');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
