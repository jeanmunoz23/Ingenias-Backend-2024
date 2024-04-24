const http = require('http');
const PORT = 3001

const server = http.createServer((request, response) => {
    let respuesta = ""
    let statusCode = 200;
    if (request.url === '/'){
        respuesta = "Bienvenid@s! Gracias por tu visita."
    } else if (request.url === '/nosotras'){
        respuesta = "Bienvenid@s a saber + de nosotras :)";
    } else if (request.url === '/cursos'){
        respuesta = "Te interesan nuestros cursos. Ven a conocer la oferta!";
    } else if (request.url === '/contacto') {
        respuesta = "Si gustas contactarnos, hazlo a este Email: :)";
    } else {
        statusCode = 404;
        respuesta = "No se encontro la ruta"
    }
    response.statusCode = statusCode;
    response.setHeader('charset', 'utf-8');
    response.setHeader('Content-Type', 'text/plain');
    response.end(respuesta);
})

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
})