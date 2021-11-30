var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{   
        nombre: {
            type: String
        },   

        tipo: {
            type: String
        },

        direccion: {
            type: String
        },

        descripcion: {
            type: String
        },

        zona: {
            type: Object
        },

        numHabitaciones: {
            type: String
        },

        precio: {
            type: String
        },

        imagenes: {
            type: String
        },


})
module.exports= mongoose.model('inmueble', userscheme)