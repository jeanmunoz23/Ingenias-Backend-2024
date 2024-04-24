const http = require('http');
const PORT = 3000

const server = http.createServer((request, response) => {  
    response.statusCode = 200;
    let resp = {data: "Hola mundo!"}
    response.end(JSON.stringify(resp));
})

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto: http://localhost:${PORT}`);
})