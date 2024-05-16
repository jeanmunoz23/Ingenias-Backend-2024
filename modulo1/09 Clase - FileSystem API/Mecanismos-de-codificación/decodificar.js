const texto_Codificado = 'SG9sYSwgTXVuZG8h'
const textoDecodificado = Buffer.from(texto_Codificado, 'base64').toString('ascii')
console.log(textoDecodificado)

const miCodificacion ="SG9sYSBtZSB2YW4gYSBjb2RpZmljYXI="
console.log(atob(miCodificacion))