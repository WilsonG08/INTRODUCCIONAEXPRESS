
const express = require('express')
const app = express()
const {engine}= require('express-handlebars');
app.engine('.hbs',engine({
    extname:'.hbs'
}))

 app.set('view engine',".hbs")
 app.set('views','./src/views')

 app.get('/inicio', (req, res) => {
    res.render('inicio');
  });
  
  app.get('/cuentas', (req, res) => {
    res.render('cuentas');
  });

  app.get('/sucursales', (req, res) => {
    res.render('sucursales');
  });
  
app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');
  