// Ejemplo con el valor booleano false
if (false) {
    console.log("Esto no se mostrará porque false es falsy.");
}

// Ejemplo con el número cero
if (0) {
    console.log("Esto no se mostrará porque 0 es falsy.");
}

// Ejemplo con una cadena vacía
if ("") {
    console.log("Esto no se mostrará porque una cadena vacía es falsy.");
}

// Ejemplo con null
if (null) {
    console.log("Esto no se mostrará porque null es falsy.");
}

// Ejemplo con undefined
if (!undefined) {
    console.log("Esto no se mostrará porque undefined es falsy.");
}

// Ejemplo con NaN
(!NaN) &&  console.log("Esto no se mostrará porque NaN es falsy.");

let User = {
    name : "name",
    age : 22,
}
// Función para verificar si un usuario es válido
function isValidUser(name, age) {
    // Verifica si el nombre es falsy (cadena vacía, null, undefined)
    // Verifica si la edad es falsy (null, undefined) o menor o igual a cero
    if (!name || age == null || age <= 0) {
        return false;
    }
    return true;
}

// Función para mostrar información de un usuario
function displayUserInfo(name, age) {
    // Verifica si el usuario es válido
    if (isValidUser(name, age)) {
        console.log(`Nombre: ${name}, Edad: ${age}`);
    } else {
        console.log("Información de usuario inválida.");
    }
}

// Llamada a las funciones con diferentes valores de usuario
displayUserInfo("Juan", 25);  // Esto mostrará: "Nombre: Juan, Edad: 25"
displayUserInfo("", 30);  // Esto mostrará: "Información de usuario inválida." (nombre vacío)
displayUserInfo("Ana", -5);  // Esto mostrará: "Información de usuario inválida." (edad negativa)
displayUserInfo("Pedro", null);  // Esto mostrará: "Información de usuario inválida." (edad es null)
displayUserInfo("Pedro", 0);  // Esto mostrará: "Información de usuario inválida." (edad es null)
