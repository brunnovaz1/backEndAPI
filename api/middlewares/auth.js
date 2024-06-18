const jwt = require('jsonwebtoken');
function validarToken(req, res, next) {
    const token = req.headers["authorization"]
    if(token) {
        try{
            const payload = jwt.verify(token, process.env.SEGREDO);
            console.log(payload)
            next()
        } catch(err) {
            res.status(400).json({msg: 'token errado!'})     
        }
    } else {
    res.status(400).json({msg: 'token inválido!'})
    }
}

module.exports = validarToken