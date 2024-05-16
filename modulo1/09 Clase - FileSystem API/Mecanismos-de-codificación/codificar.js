const textoOriginal = "Hola, Mundo!"
const textoCodificado = Buffer.from(textoOriginal).toString('base64');
console.log(textoCodificado)

const textOrig = "Hola me van a codificar"
console.log(btoa(textOrig))