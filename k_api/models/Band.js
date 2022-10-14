const mongoose = require('mongoose');

//definimos el esquema
const bandSchema = mongoose.Schema({
    name: String,
    origin: String
});


//creamos el modelo
const Band = mongoose.model('Band', bandSchema);

// Exportamos el modelo (opcional)
module.exports = Band;