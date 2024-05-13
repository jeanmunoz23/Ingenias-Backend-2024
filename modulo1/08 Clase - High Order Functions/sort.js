const productos = require('./productos');

// ////////////////////////////////////////////////////////////////
// // sort 
// ////////////////////////////////////////////////////////////////

const ordenarProductosPorNombre = ()=> { //invirtiendo signos o return, cambia a orden descendente
    const result = productos.sort((a, b)=> {
        if (a.importe > b.importe) {
            return 1;
        }
        if (a.importe < b.importe) {
            return -1;
        }
        return 0;
    })
    console.table(result)
}
ordenarProductosPorNombre()