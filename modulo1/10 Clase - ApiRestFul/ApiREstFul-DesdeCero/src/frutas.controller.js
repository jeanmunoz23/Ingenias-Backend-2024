const fs = require('fs');

function leerFrutas(){
    const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    const FRUTAS = JSON.parse(datos)
    return FRUTAS
}

function obtenerFrutaFind(id){
    // op1 leer nuevamente el archivo 
    // const datos = fs.readFileSync(__dirname + process.env.DATABASE_PATH, 'utf8' )
    // DB = JSON.parse(datos)

    // op2 usar la funcion anterior
    DB = leerFrutas()
    // op1 con triada
    
    const fruta = DB.filter(f => f.id === id) || [{error: `Error en el índice`,
    descripcion: `No se pudo encontrar un producto con el valor indicado como índice: ${id}`}]
    // op2 con if 
    // DB = leerFrutas()
    //     const fruta = DB.filter(f => f.id === id) 
    //     if (fruta === []) {
    //        return [{error: `Error en el índice`,
    //     descripcion: `No se pudo encontrar un producto con el valor indicado como índice: ${id}`}]
    //     }
    
    return fruta
}

function guardarFrutas(frutas){
    const datos = JSON.stringify(frutas);
    fs.writeFileSync(__dirname + process.env.DATABASE_PATH ,datos)
}

module.exports = {leerFrutas, obtenerFrutaFind, guardarFrutas}