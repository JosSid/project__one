'use strict';

const express = require('express');


const router = express.Router();

const schema = require('../../bandSchema.js')

const {Validator} = require('express-json-validator-middleware');
const bandSchema = require('../../bandSchema.js');

const {validate} = new Validator()

const Band = require('../../models/Band')

router.get('/', async (req,res,next) => {
    try{
        const bands = await Band.find();

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
})

router.post('/',validate({body: bandSchema}),(req, res, next) => {
    
    res.json('hola')
});

module.exports = router;