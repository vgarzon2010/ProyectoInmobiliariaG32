var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{   
        cedula: {
            type: String
        },

        nombre: {
            type: String
        },

        clave: {
            type: String
        },

        apellidos: {
            type: String
        }


})
module.exports= mongoose.model('usuarios', userscheme)