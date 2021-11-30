var mongoose = require('mongoose');
// Configurar por defecto la conexión a mongoose
const userscheme = new mongoose.Schema({
    Barrio: {type: String},
    Ciudad: {type: String},
    Zona: {type: String},
    Estrato: {type: String}
})
module.exports = mongoose.model('col_zonas', userscheme);