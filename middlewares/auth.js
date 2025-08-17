const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/configs');

const auth = {
    isAuthenticated: (req, res, next) => {

        let token = req.headers['authorization'];

        if (!token) {
            return res.status(400).json({ message: "No Token provided" });
        }

        token = token.split(' ')[1];

        const validateToken = JWT.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: "Invalid Token" })
            }

            req.userId = decoded.id;
  
            next();
        })


    }
}

module.exports = auth;