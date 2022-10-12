'use strict';

//cargar la libreria de express
const express = require('express');

// Crear la aplicacion
const app = express();

// Este middleware se activa ante todas las peticiones
app.use((req, res, next) => {
    console.log(`He recibido una peticion de tipo ${req.method} a ${req.path}`);
    next()
});

//añadir una ruta
app.get('/', (req, res, next) => {
    res.send('hola')
});

app.get('/pedidos', (req, res, next) => {
    if(true){
        //aqui queremos devolver un error
        const error = new Error('La base de datos ha caido');
        next(error);
        return;
    }
    
    res.send('Hola desde pedidos')
});

// Middleware de errores
app.use((err, req, res, next) => {
    res.send(`Ocurrio un error: ${err.message}`)
})

//arrancar la aplicacion
app.listen(8080, () => {
    console.log('Servidor HTTP arrancado en http://localhost:8080')
})