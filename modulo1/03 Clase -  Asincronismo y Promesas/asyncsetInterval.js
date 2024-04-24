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

  const getDatosAsicronicaExitosa = () => {
    return new Promise((resolve, reject) => {
      if (datos.length === 0) {
        reject(new Error('No existe datos'))
      }
        resolve(datos);
    });
  }


   
  const datosFetched = getDatosAsicronicaExitosa();
   console.log("datosFetched", datosFetched) // datosFetched Promise { <pending> }  
  async function fetchingData() {
    console.log("Estoy en async function fetchingData() ")
    const datosFetched = await getDatosAsicronicaExitosa();
    console.log(datosFetched)
  }

//   setInterval(function () {
//     console.log("setInterval --> Se ejecuta cada dos segundos")
//     fetchingData()
//   },3000) 
  
  const cancelarInterval = setInterval(function () {
    console.log("cancelarInterval --> Se ejecuta cada dos segundos")
   fetchingData()
  }, 3000) 
 
  // Luego de 10 segundos, cancelar el intervalo
  setTimeout(function() {
    clearInterval(cancelarInterval);
    console.log("Intervalo cancelado después de 8 segundos");
  }, 8000);
  