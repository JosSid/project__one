'use strict';

// Validator Schema ('express-json-validator-middleware')

const bandSchema = {
    type: 'object',
    required: [],
    properties: {
        name: {
            type: 'string',
        },
        origin: {
            type: 'string',
        }
    }
};




module.exports = bandSchema;
