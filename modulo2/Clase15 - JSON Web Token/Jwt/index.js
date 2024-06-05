const express = require('express');
const app = express();
// JWT
const jwt = require('jsonwebtoken');
// ENVIRONMENT
const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT || 3008;
const secretKey = process.env.SECRET_KEY 
const userToValid = { username: 'janetM', password: '123123'}
app.use(express.json());

// login
app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log("username ", username, " password ", password)
    if(username === userToValid.username && password === userToValid.password){
        const token = jwt.sign({username: username}, secretKey, {expiresIn:'1h'})
        res.status(200).json({token: token})
    } else {
        res.status(401).json({error: 'Credenciales inválidas'})
    }
})
function verifyToken(req, res, next) {
    const token = req.headers['authorization'] || null
    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            err ? res.status(401).json({ error: 'Token inválido.' })
                : req.decoded = decoded
            next()
          })
    }else{
        res.status(401).json({ error: 'Token no proporcionado.' })
    }
}

app.get('/rutaprotegida', verifyToken, (req, res, next) => {
    const username = req.decoded.username || null
    res.status(200).json({ "mensaje": "Has accedido correctamente a la ruta protegida.", "username": username})
})

app.get("*", (req, res) => {
    res.json({
      error: "404",
      message: "No se encuentra la ruta solicitada",
    });
  });
  
//Inicia el servidor
app.listen(PORT, () => console.log(`API escuchando en http://localhost:${PORT}`) );
  