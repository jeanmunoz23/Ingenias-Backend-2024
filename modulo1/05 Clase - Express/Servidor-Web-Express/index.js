const express = require('express');
const app = express()
const PORT = 3002
app.get('/', (request, respose)=>{
    respose.send("Hola Mundo!")
});
// get para rutas inexistentes
// app.get('*', (request, respose)=>{
//     respose.status(404).send("Lo siento, la ruta ingresada no existe!")
// })
// Middelware
app.use((request, respose)=>{
    respose.status(404).send("Lo siento, la ruta ingresada no existe! estoy en app.use")
})
app.listen(PORT, () => {
    console.log("Listening in http://localhost:"+PORT)
});
