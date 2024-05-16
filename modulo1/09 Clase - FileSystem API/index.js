const fs = require('fs')

// fs.writeFile("myFirstFile.txt","Hola este es mi archivo creado con fs en Nodejs", (err) => {
//     if (err)  console.log("Error ", err)
//     else console.log("Se creo el archivo correctamente")
// })

function existFile(filename){
    const existe = fs.existsSync(filename.trim())
    return existe
}
function existeArchivo(nombre) {
    return fs.existsSync(nombre.trim())
}

function crearArchivo(nombre, contenido) {
    if (!existFile(nombre)) {
        fs.writeFile(nombre, contenido.trim(), function (error) {
            if (error) throw error;
            console.log('Saved!');
        })
    } else {
       console.log("No puede sobreescribir el archivo:  " + nombre) 
    }
}

crearArchivo("MiArchivo.txt", "Hola mundoÑ")
function leerArchivo(nombre) {
    fs.readFile(nombre,'utf-8', (error, data)=> {
        if (error) {
          console.error(error)
        } else {
           console.log(data) 
        }
    })
}
leerArchivo("MiArchivo.txt")

function reescribirArchivo(file, content) {
    // Asegúrate de que tanto el nombre del archivo como el contenido no tengan espacios adicionales
    const trimmedFile = file.trim();
    const trimmedContent = content.trim();

    // Si necesitas incluir un salto de línea o una tabulación, asegúrate de agregarlo explícitamente
    const contentWithSpecialChars = '\n' + trimmedContent; // \n para salto de línea, \t para tabulación si es necesario

    fs.appendFile(trimmedFile, contentWithSpecialChars, (error) => {
        if (error) {
            console.error("Error al agregar contenido al archivo:", error);
        } 
        console.log("Se agregó el contenido a tu archivo:", trimmedFile);
        
    });
}
// Llamada a la función
reescribirArchivo("MiArchivo.txt", "\tHola este es mi archivo creado con fs en Nodejs");

function borrarArchivo(file) {
    fs.unlink(file.trim(), (error) => {
        if (error) {
            console.error(error)
            return
        }
        console.log("Se borro correctamente el archivo: ", file)
    })
    
}

borrarArchivo("myFirstFile.txt")