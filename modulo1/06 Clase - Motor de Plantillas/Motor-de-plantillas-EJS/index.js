const express = require('express');
const app = express();
const path = require('path');
const PORT = 3008
const computerProducts = [{name: 'Notebook Lenovo', price: 720},
                          {name: 'Macbook Air 13', price: 1250},
                          {name: 'Tablet Droid 10.1', price: 350}]
const frutas =require('./productos');

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    // res.send("Hello world!");
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenido a mi sitio web generado a partir de un motor de plantillas.',
        productsURL: `/productos`
    };
    res.render('index', data);
});

app.get('/productos', (req, res) => {
    // res.send("Hello PRODUCTS!");
    const data = { 
        title: 'Listado de productos disponible',
        message: 'Aquí encontrarás un listado de nuestro productos disponibles. Si algún producto de tu interés no figura en la lista, consúltanos a nuestro correo electrónico.',
        products: computerProducts
    };
    res.render('productos', data);
});

app.get('/frutas', (req, res) => {
    // res.send("Hello PRODUCTS!");
    const data = { 
        title: 'Listado de frutas disponible',
        message: 'Aquí encontrarás un listado de nuestro productos disponibles. Si algún producto de tu interés no figura en la lista, consúltanos a nuestro correo electrónico.',
        products: frutas
    };
    res.render('productos', data);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});