var express=require('express')
var app=express()
var bodyparse=require('body-parser')
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))
var usuariosController = require (_dirname+'/controladores/usuariosController.js').usuario

app.listen(3000, function(){
console.log('Conexion realizada con servidor')
console.log('servidor funcionando por el puerto:'+3000)
})


app.post("/cliente/guardar", function(request, response) {
  UsuariosController.guardar(request,response)
})

app.post("/cliente/eliminar", function(request, response) {
  UsuariosController.eliminar(request,response)
})

app.post("/cliente/listarUsuarios", function(request, response) {
  UsuariosController.listarUsuarios(request,response)
})

app.post("/cliente/modificar", function(request, response) {
  UsuariosController.modificar(request,response)
})
