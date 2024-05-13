const productos = require('./productos');

// ////////////////////////////////////////////////////////////////
// // find 
// ////////////////////////////////////////////////////////////////
// array object
const result = productos.find(producto => producto.id === 5)
if (result !== undefined) console.table(result)
const macbook = productos.find(producto => producto.nombre.includes('Mac'))
if (macbook !== undefined) console.log(macbook) 

const noexiste = productos.find(producto => producto.nombre.includes('fdfdf'))
if (noexiste === undefined) console.log('No existe elemento') 

// array element
const mipais = paises.find(pais => pais === 'Argentina')
if (mipais !== undefined) console.log("Nuestro pais: ", mipais)
