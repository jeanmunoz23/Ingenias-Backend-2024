const productos = require('./productos');



// ////////////////////////////////////////////////////////////////
// // reduce 
// ////////////////////////////////////////////////////////////////

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = productos.reduce((accumulator, currentValue) => accumulator + currentValue.importe, initialValue);

console.log("Total: ", sumWithInitial)
