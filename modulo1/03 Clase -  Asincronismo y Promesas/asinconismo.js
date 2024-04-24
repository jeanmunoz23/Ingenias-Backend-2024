// Función asíncrona que simula una solicitud HTTP
function hacerSolicitud() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simular éxito
        // resolve("Datos recibidos");
        // Simular error
        reject("Error al realizar la solicitud");
      }, 2000); // Simular un tiempo de espera de 2 segundos
    });
  }
  
  console.log("Inicio de la solicitud");
  
  hacerSolicitud()
    .then((datos) => {
      console.log(datos);
      console.log("Fin de la solicitud");
    })
    .catch((error) => {
      console.error(error);
      console.log("Fin de la solicitud con error");
    });
  