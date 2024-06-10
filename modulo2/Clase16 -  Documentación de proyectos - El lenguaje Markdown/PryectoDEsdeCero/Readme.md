# Api restFull FRutas

Aplicacion que permitira listar el stock de frutas de una verduleria. Permitiendo sumar o modificar o eliminar algunas de las frutas

# Tecnologias
- Nodejs con javascript
    - express
    - dotenv
- mongodb

# Como levantar nuestro proyecto
Abrir una terminal ubicados en nuestra carpeta ¨
```bash
$ git clone https://github.com/jeanmunoz23/Ingenias-Backend-2024 
$ cd ../modulo2/Clase16 -  Documentación de proyectos - El lenguaje Markdown/PryectoDEsdeCero>
```
## Instalar dependencias
```bash
    $ npm install 
    $ npm start

    or developers
    $ npm run dev
```


# Endpoint

| Descripcion | Ruta |  parametros | body | respuesta |
|:--------------|:-------------:|--------------:|:-------------:|--------------:|
| ruta raiz |  http://localhost:3008/api/v1/  |  || lista todas las frutas |
| buscar fruta por id |  http://localhost:3008/api/v1/fruta/2  | 2 | - |   {  "id": 2,   "imagen": "🍎",     "nombre": "Manzanas",    "importe": 270,       "stock": 0    }, |

# Env
> PORT -> ES EL PUERTO DONDE SE ESCUCHARA NUESTRO SERVIDOR

> MONGODB_URLSTRING -> ES LA URLSTRING PARA CONTECTARSE A NUESTRA BASE

# TEST MY API
EN THUNDER CLIENT -> CLICK NEW REQUEST 

