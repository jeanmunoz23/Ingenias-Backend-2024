const productos = require('./productos');

// ////////////////////////////////////////////////////////////////
// // filter 
// ////////////////////////////////////////////////////////////////
// array object
const resultfilter = productos.filter(producto => producto.id === 5)
console.log("coincidencias con filter")
console.table(resultfilter)
console.log("....")
const misTablet = productos.filter(producto => producto.categoria === "Tablet")
const teles = productos.filter(producto => producto.categoria === "TV")

console.log("largo  del array de tablet", misTablet.length)
console.table(misTablet)
console.log("....")

console.log("largo  del array de teles", teles.length)
console.table(teles)
console.log("....")