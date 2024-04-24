const datos = [
    {
        id:1,
        title:'Iron Man',
        year: 2008
    },
    {
        id:2,
        title:'SpiderMan: Homecoming',
        year: 2017
    },{
        id:3,
        title:'Avengers: Endgame',
        year: 2019
    }
  ];

//   // sincronico
  const getDatosSincronico=() => {
   return datos;
  }
  console.log(getDatosSincronico())

//   // asincronico  como no hay nada que haga que es
//   const getDatosAsic = () => {
//     setTimeout(() => {
//       return datos;
//     }, 1500)
//    }
//    console.log(getDatosAsicFallida())

// asincronico 
  const getDatosAsicronicaExitosa = () => {
    return new Promise((resolve, reject) => {
      if (datos.length === 0) {
        reject(new Error('No existe datos'))
      }
      setTimeout(() => {
        resolve(datos);
      }, 4000)})
  }

  console.log(getDatosAsicronicaExitosa()) // Promise { <pending> }

  getDatosAsicronicaExitosa()
//   .then((datos) => console.log(datos))
//   .catch((err) => console.log(err.message))

// Después de 10 segundos (10000 milisegundos)

//     // podriamos reescribir el llamado a la funcion de manera mas secuencial pero igualmente asicrono
//   // ojo no se puede usar await fuera de una funcion 
//   const datosFetched = getDatosAsicronicaExitosa();
//    console.log("datosFetched", datosFetched) // datosFetched Promise { <pending> }  
  async function fetchingData() {
    console.log("Estoy en async function fetchingData() ")
    const datosFetched = await getDatosAsicronicaExitosa();
    console.log(datosFetched)
  }
//   fetchingData()

  async function fetchingData1() {
    console.log("Estoy en async function fetchingData1() ")
    try {
      const datosFetched = await getDatosAsicronicaExitosa();
      console.log(datosFetched)
    } catch (err) {
      console.log(err.message)
    } finally {
      console.log("Estoy en fetchingData1 finally() ")
    }
  
   }
   fetchingData1()