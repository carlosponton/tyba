import jwt from 'jsonwebtoken';
import UserModel from '../api/models/user';


// middleware to validate token (rutas protegidas)
const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' });
    try {
        const verified = jwt.verify(token.split(' ')[1], process.env.TOKEN_SECRET);
        const user = await UserModel.findById(verified.id);
        if(!user) {
          return res.status(401).json({ error: 'Acceso denegado' });
        }
        req.user = user;
        next()
    } catch (error) {
        res.status(400).json({error: 'token no es válido'});
    }
}

module.exports = verifyToken;