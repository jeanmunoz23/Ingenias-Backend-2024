const productos = require('./productos');

// ForEach
// productos.forEach((e) => console.table(e));

// for( p of productos ){
//     console.table(p)
// }

const paises = ['Argentina', 'Bolivia', 'Chile', 'Ecuador', 'Paraguay', 'Uruguay']
paises.forEach(pais => console.log("en el forEach", pais))
for (let p of paises) {
    console.log("en el for",p)
}