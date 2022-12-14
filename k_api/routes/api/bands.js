'use strict';

const express = require('express');


const router = express.Router();

const schema = require('../../bandSchema.js')

const {Validator} = require('express-json-validator-middleware');
const bandSchema = require('../../bandSchema.js');

const {validate} = new Validator()

const Band = require('../../models/Band')

const basicAuthMiddleware = require('../../lib/basicAuthMiddleware')

router.get('/', async (req,res,next) => {
    try{

        //filtros
        const name = req.query.name;
        const origin = req.query.origin;
        const skip = req.query.skip;
        const limit = req.query.limit;
        const fields = req.query.fields;
        const sort = req.query.sort;

        const filtro = {}

        if(name) {
            filtro.name = name;
        }

        if(origin) {
            filtro.origin = origin;
        }

        const bands = await Band.lista(filtro,skip,limit, fields,sort);

        res.json({results: bands})
    }catch(err){
        next(err);
    };
});



router.get('/:name', async (req, res, next) => {
    try {
        const name = req.params.name;

        const band = await Band.find({name: name})

        res.json({result: band})

    } catch (err) {
        next(err)
    }
});


//Create Band
//TODO:Arreglar validate
router.post('/', basicAuthMiddleware,validate({body: bandSchema}),async (req, res, next) => {
    try{
        const bandData = req.body;
        //instanciamos objeto en memoria
        const band = new Band(bandData);
        //lo guardamos en la base de datos
        const bandSave = await band.save();

        res.json({result: bandSave})


    }catch(err){
        next(err)
    }
    
    
});

router.put('/:id',basicAuthMiddleware, async (req, res, next) => {
    try {
        const _id = req.params.id;
        const data = req.body;

        const updatedBand = await Band.findOneAndUpdate({ _id: _id}, data, {new: true});//new: true nos devuelve el documento actualizado

        res.json({result : updatedBand})
    } catch (err) {
        next(err)
    };
});

router.delete('/:id',basicAuthMiddleware, async (req,res,next) => {
    try {
        const _id = req.params.id;
        await Band.deleteOne({ _id: _id});

        res.json({message: 'Deleted Band'})
    } catch (err) {
        next(err)
    };
});

module.exports = router;