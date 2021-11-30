/*var modelo= require('./users')

 require('./Conexion')
 //var modelo2=require('./zonas')

 
 //app.post("/upload", (req, res) => {
     
    var myobj = { cedula: "222222221", nombre: "Adriana Maria", clave: "767776677", apellidos:"Torres Alvarez" };
    modelo.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 documento insertado");
    
   
  });*/

const express= require("express");
const {createReadStream} = require('fs')
var modelo= require('./users')
var modeloubicacion= require('./ubicacion')
var modeloInmueble= require('./inmuebles')

//var qs=require("querystring")
//var body_parser = require('body-parser');


const app= new express();
const HTML_CONTENT_TYPE = 'text/html'

//app.use(body_parser.urlencoded({extended:true}));
/*
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static("Public"));


const path = require("path");
//var modeloUsario= require('./users')
var modeloUsario= require('./inmuebles')


 require('./Conexion')
 //var modelo2=require('./zonas')

 
     
 app.post("/upload", (req, res) => {
  var myobj = { cedula: req.body.cedula, nombre: req.body.nombre, apellidos: req.body.apellidos, clave: req.body.clave };
  modelo.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;

  })
  res.send("Usuario ingresado con exito")
  })

  app.post("/insertarInmueble", (req, res) => {
    let oldName = req.body;//Obtener el nombre
    //Agrega el sufijo original al nuevo nombre

    console.log(req.body.ubicacion)

     /*
    modeloUbicacion.find({barrio:req.body.ubicacion}, (err, docs) => {
      var myobj = { nombre:req.body.nombre, tipo: req.body.tipo, imagen: req.body.imagen, ubicacion: docs[0]._id  };
      modeloInmueble.collection.insertOne(myobj, function(err, res) {
      if (err) throw err;  
      })
      })
    res.send("inmueble guardado")

*/
})


  


app.post("/insertarUbicacion", (req, res) => {

    var myobj = { nombre:req.body.nombre, tipo: req.body.tipo, descripcion: req.body.descripcion, ubicacion: docs[0]._id, numhabitaciones:req.body.numhabitaciones, precio:req.body.precio, imagen: req.body.imagen  };
    modeloInmueble.collection.insertOne(myobj, function(err, res) {
    if (err) throw err;  
    })
    
  res.send("ubicacion guardada")
})

app.post("/insertarInmuebles", (req, res) => {
//coloco la lógica para insertar un nuevo inmueble
//el filtro de la ubicaciòn del inmueble

modeloUbicacion.find({barrio:'toberin'}, (err,docs) => {
  var myobj = { nombre:'apartamento_14', tipo: 'apartamento', imagen: '/img.png', ubicacion: docs[0]._id  };
  modeloInmueble.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;

  })
  console.log("datos guardados. Inmueble con su ubicación")
  
  })
  
res.send("respuesta desde el servidor")
})


//cuando guardo el inmueble le envio el criterio ubicación




/*
modeloUbicacion.find({barrio:'toberin'}, (err, docs) => {
  var myobj = { nombre:'apto8', tipo: 'apartacho', imagen: 'esa2', ubicacion: docs[0]._id  };
  modeloInmueble.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;

  })
   console.log(docs[0]._id)

})
*/
//})

/*
modeloUsario.find({}, (err, docs) => {

     console.log(docs[2].nombre)

})
*/
  //})

  app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
 

  createReadStream('./index.html').pipe(res)
//res.end("hola mundo");
   
  })


  app.listen(4000, () => {

    console.log("aplicacion corriendo en el puerto 4000")
    
    })