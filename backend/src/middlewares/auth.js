const jwt = require('jsonwebtoken');
const {promisify} = require('util')
const authConfig = require('../config/auth');

module.exports ={

    async auth(req, res, next){
        const authenticated = req.headers.authorization
        if(!authenticated){
            return res.status(400).json({error: "Não ha token"});
        }
        const [, token] = authHeader.split(" ");

        try{
            const decoded = await promisify(jwt.verify)(token, authConfig.secret);

            req.user = decoded;
            return next;
        }catch(err){
            return res.status(400).json({error: "Token Invalido"});
        }
    }
}