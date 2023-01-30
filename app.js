var express=require('express')
var app=express()
var bodyparse=require('body-parser')
const { response } = require('express')
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))

console.log('Conexion realizada con servidor')
app.listen(3000, function(){
console.log('servidor funcionando por el puerto:'+3000)
})

var datos=[]
app.post("/cliente/guardar", function(request, response) {
    var post = {
        cedula: request.body.id,
        nombre:request.body.name,
        apellido:request.body.lastname,
        direccion:request.body.address,
        telefono:request.body.cellphone,
        edad:request.body.age,
        estadocivil:request.body.status
    }

    if(
        post.cedula==""||post.cedula==null||post.cedula==undefined||
        post.nombre==""||post.nombre==null||post.nombre==undefined||
        post.apellido==""||post.apellido==null||post.apellido==undefined||
        post.direccion==""||post.direccion==null||post.direccion==undefined||
        post.telefono==""||post.telefono==null||post.telefono==undefined||
        post.edad==""||post.edad==null||post.edad==undefined||
        post.estadocivil==""||post.estadocivil==null||post.estadocivil==undefined
    
        ) {
        response.json({state:false,mensaje:"El campo es obligatorio de name y id"})
        return false }

    datos.push({
        cedula: request.body.id,
        nombre:request.body.name,
        apellido:request.body.lastname,
        direccion:request.body.address,
        telefono:request.body.cellphone,
        edad:request.body.age,
        estadocivil:request.body.status})
    response.json({state:true,mensaje:"usuario guardado"})
})

app.post("/cliente/eliminar", function(request, response) {
    var post = {
    cedula: request.body.id
}
    if(post.cedula==""||post.cedula==null||post.cedula==undefined) 
        {
            response.json({state:false,mensaje:"El campo es obligatorio de name y id"})
            return false }

    var posicion=datos.findIndex((item)=>item.cedula==post.cedula)

    if(posicion==-1) {
      response.json({state:false,mensaje:"Esta cedula no existe"})
      return false
    }

    datos.splice(posicion,1)
    response.json({state:true,mensaje:"Se eliminó correctamente"})
})

app.post("/cliente/listarcliente", function(request, response) {

    var post = {
    cedula: request.body.id
}
    if(post.cedula==""||post.cedula==null||post.cedula==undefined)
        {
            response.json({state:false,mensaje:"El campo es obligatorio de name y id"})
            return false }

    var posicion=datos.findIndex((item)=>item.cedula==post.cedula)

    if(posicion==-1) {
      response.json({state:false,mensaje:"Esta cedula no existe"})
      return false
    }
    response.json({state:true,dato:datos[posicion]})
})

app.post("/cliente/modificar", function(request, response) {

    var post = {
    cedula: request.body.id,
    nombre:request.body.name,
    apellido:request.body.lastname,
    direccion:request.body.address,
    telefono:request.body.cellphone,
    edad:request.body.age,
    estadocivil:request.body.status
}
    if(post.cedula==""||post.cedula==null||post.cedula==undefined)
        {
            response.json({state:false,mensaje:"El campo es obligatorio de name y id"})
            return false }

    var posicion=datos.findIndex((item)=>item.cedula==post.cedula)

    if(posicion==-1) {
      response.json({state:false,mensaje:"Esta cedula no existe"})
      return false
    }
    datos[posicion].nombre=post.nombre
    datos[posicion].apellido=post.apellido
    datos[posicion].direccion=post.direccion
    datos[posicion].telefono=post.telefono
    datos[posicion].edad=post.edad
    datos[posicion].estadocivil=post.estadocivil

    response.json({state:true,mensaje: "Cliente actualizado",dato:datos[posicion]})
})