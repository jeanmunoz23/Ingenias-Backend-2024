const fs = require('fs');

function leerFrutas(){
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const FRUTAS = JSON.parse(datos)
    return FRUTAS
}

module.exports = {leerFrutas}