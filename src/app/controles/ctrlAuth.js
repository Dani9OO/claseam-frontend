const { Router } = require ('express');
const router = Router();

const Usuario = require('../modelos/usuario');
const verifToken = require( './verifToken');

const jwt = require('jsonwebtoken');//
const config = require('../config');//

router.post('/inicio', async (req, res)=>{
    const user = await User.findOne({username: req.body.username})
    if(!user) {
        return res.status(404).send("el usuario no existe")
    }
    const validPassword = await user.comparePassword(req.body.password, user.password);
    if (!validPassword) {
        return res.status(401).send({auth: false, token: null});
    }

    //si existe usuario y contraseña es correcta se crea token

    const token = jwt.sign({id: user._id}, config.secret, {
        expiresIn: 60 * 60 * 24 //tiempo de vida del token
    });
    res.status(200).json({auth: true, token});
});

module.exports = router;