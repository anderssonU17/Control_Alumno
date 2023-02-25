const {validationResult} = require('express-validator'); // libreria 

const validateParams = async(req, res, next) => {
    const errors = validationResult(req); // capturar errores
    if(!errors.isEmpty()){
        return res.status(400).send({
            ok: false, 
            errors: errors.mapped()
        })
    }
    next();
}

module.exports = { validateParams }