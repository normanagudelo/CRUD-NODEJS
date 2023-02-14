
var ModelUsuarios={}

ModelUsuarios.guardar=function(post,callback) {

datos.push({
            cedula:    post.id,
            nombre:    post.name,
            apellido:  post.lastname,
            direccion: post.address,
            telefono:  post.cellphone,
            edad:      post.age,
            estadocivil:post.status

        })

        return callback ({state:true,mensaje:"usuario guardado"})
        }

