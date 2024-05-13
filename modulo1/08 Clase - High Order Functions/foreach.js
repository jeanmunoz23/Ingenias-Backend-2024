const productos = require('./productos');

// ////////////////////////////////////////////////////////////////
// // forEach 
// ////////////////////////////////////////////////////////////////
console.log(" =====forEach==productos==== ")
// array object
productos.forEach((e) => console.table(e));

console.log(" =====for==productos==== ")
for( p of productos ){
    console.table(p)
}

// array element
const paises = ['Argentina', 'Bolivia', 'Chile', 'Ecuador', 'Paraguay', 'Uruguay']
console.log(" =====forEach=paises===== ")
paises.forEach(pais => console.log("en el forEach", pais))
console.log(" =====for=paises==== ")
for (let p of paises) {
    console.log("en el for",p)
}