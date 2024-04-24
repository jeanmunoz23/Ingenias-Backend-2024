const paises = ['Argentina', 'Uruguay', 'Brasil', 'Venezuela', 'Paraguay', 'Bolivia', 'Chile']


function listarPaises(array) {
    console.log("Listado de países contenidos en el array:");
    console.table(array);
}

function cambiarNombre() {
    const tuNombre = "Ingresas aquí tu nombre de pila o completo";

    try {
        tuNombre = nombre;
    } 
    catch(err) {
        console.error("Se ha producido un error al intentar cambiar el valor de una constante.", err)
    } 
    finally {
        console.log("El nombre de la constante tuNombre es:", tuNombre)
    }
}

let nombre = "Donna Clark";
console.log(nombre);
let num = NaN
nombre = num
console.log(nombre);
const productos = {id: 123, nombre: "Donna Clark", importe:343.43,stock:55} 
function mostrarPrd(prod){
    console.log(prod.nombre);
    console.log(prod.precio ?? 0)
}
mostrarPrd(productos)
console.log(productos.nombre);
console.log(productos.precio)

//Descomentar las siguientes funciones para ver los resultados en la consola JS
//listarPaises(paises)
//cambiarNombre()