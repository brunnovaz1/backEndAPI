const jwt = require('jsonwebtoken');








function validarToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token) {
        try {
            console.log(token)
            const payload = jwt.verify(token, process.env.SEGREDO);
            console.log(payload);
            next();

        } catch(err) {
            res.status(404).json({msg: 'acesso negado'})
        }

    } else {
        res.status(400).json({msg: 'token invalido'})
    }
}

module.exports = validarToken;