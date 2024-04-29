const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
      dotenv.config();
const PORT = process.env.PORT || 3000
  
  app.use(express.static(path.join(__dirname, process.env.WEBSITE_FOLDER)));

// La ruta raíz
  app.get('/', (req, res) => {
    res.send('¡Hola, mundo. Hola, Node.js!'); 
  });

app.get('/nosotros', (req, res) => {
  res.send('Aquí tienes información sobre nuestra empresa.'); 
});

app.get('/cursos', (req, res) => {
  res.send('Este es el listado de cursos que brindamos.'); 
});

app.get('/bootcamps', (req, res) => {
  res.send('¿Te gusta la adrenalina? Puedes sumarte a nuestros bootcamps intensivos.'); 
});

app.get('/contacto', (req, res) => {
  res.send('¿Dudas, Consultas? No dejes de escribirnos a info@fakeEmail.dont'); 
});

// Ruta predeterminada para manejar rutas inexistentes
app.get('*', (req, res) => {
  res.status(404).send('Lo siento, la página que buscas no existe.'); 
});
// app.use((req, res) => { //otra alternativa para manejar rutas inexistentes
//   res.status(404).send('Lo siento, la página que buscas no existe.');
// });

// Inicia el servidor
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
