const mongoose = require('mongoose');

//definimos el esquema
const bandSchema = mongoose.Schema({
    name: String,
    origin: String
});

//Metodo estatico del modelo
bandSchema.statics.lista = function(filtro, skip, limit,fields,sort){
    const query = Band.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields)
    query.sort(sort)
    return query.exec();
};


//creamos el modelo
const Band = mongoose.model('Band', bandSchema);

// Exportamos el modelo (opcional)
module.exports = Band;