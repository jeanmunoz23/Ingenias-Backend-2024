const productos = require('./productos');

// ////////////////////////////////////////////////////////////////
// // map 
// ////////////////////////////////////////////////////////////////
// const reducirObjetoProductos = () => {
    const resultado = productos.map((producto) => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
        }
    })
    console.log("reducirObjetoProductos",resultado)
// }
// reducirObjetoProductos()

const mapearProductosCreados = () => {
    const resultado = productos.map((producto) => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
            importe10Plus: (producto.importe * 1.10).toFixed(2),
            importe10Off: (producto.importe * 0.90).toFixed(2),
        }
    })
    console.log("mapearProductosCreados")
    console.table(resultado)
}
mapearProductosCreados()


const pasarAMayusculaElNombre = () => {
    const resultado = productos.map((producto) => {
        return {
            id: producto.id,
            PRODUCTOS: producto.nombre.toUpperCase()
        }
    })
    console.table(resultado)
}
pasarAMayusculaElNombre()