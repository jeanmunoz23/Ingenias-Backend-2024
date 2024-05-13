const productos = require('./productos');

// forEach 
// ////////////////////////////////////////////////////////////////

//Función para iterar cada producto enviando el mismo a la consola JS
const iterarProductos = ()=> {
    if (productos.length > 0) {
        productos.forEach((producto) => {
            console.log('iterarProductos',producto)
        });
    }
}
iterarProductos() // asi la ejecuto para que por consola muestre su resultado
// ////////////////////////////////////////////////////////////////
// // find 
// ////////////////////////////////////////////////////////////////

//iterarProductos()
//función para buscar un producto por una propiedad
const buscarProductoPorID = ()=> {
    const resultado = productos.find((producto)=> producto.id === 5)
          if (resultado === undefined) {
              console.error("No se encontraron coincidencias:", resultado)
          } else {
              console.log('resultado de buscarProductoPorID')
              console.table(resultado)
          }
}
buscarProductoPorID()
/*
    REEMPLAZAR LAS PRIMERAS DOS LÍNEAS DE CÓDIGO DE LA FUNCIÓN filtrarProductosPorNombre(), POR CUALQUIERA DE LAS SIGUIENTES OPCIONES:

    //Ejemplo 02
    let nombreProducto = 'Smartwatch'; (para una búsqueda por parte del nombre de un producto)
    const resultado = productos.filter((producto)=> producto.nombre.includes(nombreProducto));

    //Ejemplo 03
    let nombreProducto = 'Smartwatch'; (para una búsqueda por parte del nombre de un producto)
    const resultado = productos.filter((producto)=> producto.nombre.toLowerCase().includes(nombreProducto));
    
    //Ejemplo 04
    let nombreProducto = 'book';        //(para una búsqueda combinada entre parte del nombre del producto, y la categoría exacta)
    let categoriaProducto = 'Portátil';
    const resultado = productos.filter((producto)=> producto.nombre.includes(nombreProducto.toLowerCase()) && producto.categoria === categoriaProducto);
    
    //Ejemplo 05
    let importeProducto = 150_000;      //(para una búsqueda por precio que sea mayor al establecido en la variable)
    const resultado = productos.filter((producto)=> producto.importe > importeProducto);
*/
// ////////////////////////////////////////////////////////////////
// // filter 
// ////////////////////////////////////////////////////////////////

const filtrarProductosPorNombre = ()=> {
    let categoriaProducto = 'Tablet';
    const resultado = productos.filter((producto) => producto.categoria === categoriaProducto);
    // el tener el resultado solo o tener resultado !== [] es lo mismo porque preguntamos lo mismo indirectamente
    if (resultado) { 
            console.log('resultado de filtrarProductosPorNombre')
            console.table(resultado);
          } else {
                console.error("No se encontraron coincidencias.");
          }
}
filtrarProductosPorNombre()

// ////////////////////////////////////////////////////////////////
// // map 
// ///////////////////////////////////////////////////////////////
const mapearProductosEnArraySimple = ()=> {
    const resultado = productos.map((producto)=> {
        return {
                    nombre: producto.nombre
               }
    })
    console.log('resultado de mapearProductosEnArraySimple')
    console.table(resultado)
}
mapearProductosEnArraySimple()
// ////////////////////////////////////////////////////////////////
// // some 
// ////////////////////////////////////////////////////////////////
const verificarExistenciaDeProductos = ()=> {
    const existeNotebook = productos.some(producto => producto.nombre === 'Notebook Gamer 17 pulgadas')
          console.log("existeNotebook ¿Existe el producto?:", existeNotebook)

    const existeMac = productos.some(producto => producto.nombre === "Macbook Pro 13'")
          console.log("existeMac ¿Existe el producto?:", existeMac)
}
verificarExistenciaDeProductos()
// ////////////////////////////////////////////////////////////////
// // map 
// ////////////////////////////////////////////////////////////////
const mapearProductosCreandoCamposCalculados = ()=> {
    const resultado = productos.map((producto)=> {
        return {
                nombre: producto.nombre,
                importe: producto.importe,
                importe10Plus: (producto.importe * 1.10),
                importe10Off: (producto.importe * 0.90)
               }
    })
    console.log('resultado mapearProductosCreandoCamposCalculados')
    console.table(resultado)
}
mapearProductosCreandoCamposCalculados()
// ////////////////////////////////////////////////////////////////
// // reduce 
// ////////////////////////////////////////////////////////////////
const calcularCarritoDeProductos = ()=> {
    const carrito = [{nombre: 'Tablet PAD 9.7', importe: 195000},
                     {nombre: 'Smartwatch 2" red', importe: 24200}];
    const resultado = carrito.reduce((acc, producto)=> acc + producto.importe, 0)

    console.log("calcularCarritoDeProductos Importe total del carrito:", resultado)
}
calcularCarritoDeProductos()
// ////////////////////////////////////////////////////////////////
// // sort 
// ////////////////////////////////////////////////////////////////

const ordenarProductosPorNombre = ()=> { //invirtiendo signos o return, cambia a orden descendente
    productos.sort((a, b)=> {
        if (a.nombre > b.nombre) {
            return -1;
        }
        if (a.nombre < b.nombre) {
            return 1;
        }
        return 0;
    })
    console.log(productos)
}
ordenarProductosPorNombre()

const productos = require('./productos')
// ////////////////////////////////////////////////////////////////
// // forEach 
// ////////////////////////////////////////////////////////////////
productos.forEach(producto => console.table(producto))

const paises = ['Argentina', 'Bolivia', 'Chile', 'Ecuador', 'Paraguay', 'Uruguay']
paises.forEach(pais => console.log(pais))
for (let p of paises) {
    console.log(p)
}

// ////////////////////////////////////////////////////////////////
// // find 
// ////////////////////////////////////////////////////////////////
// array object
const macbook = productos.find(producto => producto.id === 3)
if (macbook !== undefined) console.log(macbook)
// array element
const mipais = paises.find(pais => pais === 'Argentina')
if (mipais !== undefined) console.log("Nuestro pais: ", mipais)

// ////////////////////////////////////////////////////////////////
// // filter 
// ////////////////////////////////////////////////////////////////
const misTablet = productos.filter(producto => producto.categoria === "Tablet")
const teles = productos.filter(producto => producto.categoria === "TV")
console.table(misTablet)
console.log("largo  del array de tablet", misTablet.length)
console.log(teles)
console.log("largo  del array de teles", teles.length)


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
const resultado2 = productos.filter(p => p.nombre.toLowerCase().includes(palabra2.toLowerCase())
   || p.categoria.toLowerCase() === palabra2.toLowerCase())
console.log('resultado2',resultado2)

// ////////////////////////////////////////////////////////////////
// // some 
// ////////////////////////////////////////////////////////////////

const existeMacbook = productos.some(p => p.nombre.includes('tv'))
console.log('existeMacbook',existeMacbook)


// ////////////////////////////////////////////////////////////////
// // map 
// ////////////////////////////////////////////////////////////////

const mapearProductosCreados = () => {
    const resultado = productos.map((producto) => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
            importe10Plus: (producto.importe * 1.10),
            importe10Off: (producto.importe * 0.90),
        }
    })
    console.log("mapearProductosCreados",resultado)
}
mapearProductosCreados()

const reducirObjetoProductos = () => {
    const resultado = productos.map((producto) => {
        return {
            nombre: producto.nombre,
            importe: producto.importe,
        }
    })
    console.log("reducirObjetoProductos",resultado)
}
reducirObjetoProductos()

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
