'use strict'

const {Router} = require('express');
const { createUser, readUser, loginUser, editUser } = require('../controller/user.controller');
const {check} = require('express-validator');
const {validateParams} = require('../middlewares/validate-params');
const { validateJWT } = require('../middlewares/validate-jwt');

const api = Router();

api.post('/create-user', [validateJWT, check('username', 'el username es obligatorio').not().isEmpty(),
    check('password', 'el password debe de ser mayor a 6 digitos').isLength({min: 6}), 
    check('email', 'el email es obligatorio').not().isEmpty(),
    validateParams], createUser); // Cuando suceda un error valideparams nos enviara eso

api.get('/read-user', readUser);
api.post('/login', loginUser)
api.put('/edit-user/:id', 
    [validateJWT,
        check('username', 'El username es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser mayor a 6 digitos').isLength({
            min: 6,
        }),
        check('email', 'El email es obligatorio').not().isEmpty(),
        validateParams,], editUser)

module.exports = api;