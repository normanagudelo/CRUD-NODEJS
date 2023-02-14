var express=require('express')
global.app=express()
var bodyparse=require('body-parser')
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))
global.datos=[];


require(_dirname+'/routes.js')