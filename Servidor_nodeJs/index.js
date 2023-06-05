const http = require("http");

const server = http.createServer((req,res)=>{
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Levantamiento Servidor Nodejs</h1>"    );
    res.write("<button type="button" onclick="alert('Esto es un cuadro de alerta')">Probar alerta</button>"
);
    res.end()
})

server.listen(3000)

console.log("Servidor ejecutandose en el puerto 3000");