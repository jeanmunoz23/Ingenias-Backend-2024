  // // promesas
  const promesa = new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random()
    if (numeroAleatorio <= 0.5){
      resolve(numeroAleatorio)
    } else {
        console.log("numeroAleatorio", numeroAleatorio)
      reject(new Error("El nro es menor a 0.5", numeroAleatorio))
    }
  })
  promesa.then(resultado => console.log("Promesa con exito: ", resultado))
    .catch(err => console.log("Promesa fallida", err.message))
  .finally(() => console.warn("warning siempre se muestra"))