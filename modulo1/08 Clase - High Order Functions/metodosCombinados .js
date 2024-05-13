const productos = require('./productos');


////////////////////////////////////////////////////////////////
// metodos combinados 
////////////////////////////////////////////////////////////////
let palabra = 'Smartwatch';// (para una búsqueda por parte del nombre de un producto)
const resultado0 = productos.filter(p => p.nombre.includes(palabra))
console.log("resultado0", resultado0)

let palabra1 = 'BOOK';// (para una búsqueda por parte del nombre de un producto)
const resultado1 = productos.filter(p => p.nombre.toLowerCase().includes(palabra1.toLowerCase()))
console.log('resultado1', resultado1)

let palabra2 = 'blet';// (para una búsqueda por parte del nombre de un producto)
const resultado2 = productos.filter(p => 
    p.nombre.toLowerCase().includes(palabra2.toLowerCase())
   || p.categoria.toLowerCase().includes(palabra2.toLowerCase()))
console.log('resultado2',resultado2)


// array element
const resultPaises = paises.filter(pais => pais.includes('uay'))
console.log('resultPaises con uay',resultPaises)
console.table(resultPaises)

