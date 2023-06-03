//Creamos el servidor 
// const http = require("http");

// const server = http.createServer((req,res)=>{
//     // res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');
//     // res.write("<h1>Ejemplo Servidor NPM</h1>");
//     res.end()
// })

//Utilizando express podemos poner diferentes rutas de nuestra página.
const express = require('express')
const app = express()

app.get('/principal',(req,res)=>{
    res.send("Bienvenidos a la tienda")
})
app.get('/Productos',(req,res)=>{
    res.send("Aqui encontraran todos nuestros productos")
})
app.get('/contactos',(req,res)=>{
    res.send("Nuestros contactos son: ")
})
app.get('/quienesomos',(req,res)=>{
    res.send("Toda la historia sobre nuestra tienda")
})
//Podemos hacerlo tambien con imagenes
app.get('/imagen',(req,res)=>{
    res.sendFile('./tienda.jpg',{
        root:__dirname
    })
})
//Podemos escribir una ruta que nos devuelva un json
app.get('/user',(req,res)=>{
    res.json({
        "nombre":"Josue",
        "apellido":"Salazar",
        "edad":21,
        "direccion":{
            "callePrincipal":"Mariscal Sucre",
            "calleSecundaria":"Rio Peripa",
        }
    })
})
//Trabajamos con otras rutas como un post
app.use(express.json())

app.post('/login',(req,res)=>{
    const {nombre,correo} = req.body
    res.send(`Los datos enviados son: ${nombre} - ${correo}`)
})
//Podemos poner una cierta seguridad a la hora de ingresar
app.get('/usuario/:perfil/foto',(req,res)=>
{
    if(req.params.perfil === "josue")
    res.sendFile('./tienda.jpg',{
        root:__dirname
    })
    else{
        res.send("El usuario escrito no es el indicado")
    }
})
// En el caso de que la ruta no exista
app.use((req,res)=>{
    res.status(404).send("Página no encontrada - 404")
})

console.log(__dirname); 
//Se ejecutara en el puerto 3000
app.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");