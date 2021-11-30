var mongoose = require('mongoose');
//Set up default mongoose connection
const userscheme=new mongoose.Schema(
{   
        nombre: {
            type: String
        },


})
module.exports= mongoose.model('ubicaciones', userscheme)