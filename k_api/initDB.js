'use strict';
//Esto me da la pregunta en la consola
const readline = require('readline')

// conectar la base de datos
const connection = require('./lib/connectMongoose')

//cargar los modelos
const Band = require('./models/Band')

async function main() {

    await connection.$initialConnection

     const confirm = await question('Are you completely sure about resetting the database to its initial state?');
     if(!confirm) {
        process.exit()
     }
    //inicializar la coleccion de bandas
    await initBands();

    connection.close();
};

main().catch(err => console.log('Hubo un error: ', err));


async function initBands() {
    //Borrar todos los documentos de bandas
    const deleted = await Band.deleteMany();
    console.log(`Deleted ${deleted.deletedCount} resources`);

    const inserted = await Band.insertMany(bands)
    console.log(`Created ${inserted.length} resources`)
};

function question(text){
    return new Promise((resolve, reject) => {
        const ifc = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        ifc.question(text, answer => {
            ifc.close();
            if(answer.toLowerCase() === 'si') {
                resolve(true);
                return;
            }
            resolve(false)
        })
    })

};

const bands = [
    {
        name: 'Foo Fighters' ,
        origin: 'USA'
    },
    {
        name: 'ACDC',
        origin: 'Australia'
    },
    {
        name: 'Los Zigarros',
        origin: 'Spain'
    },
    {
        name: 'Motor Head',
        origin: 'England'
    }
];