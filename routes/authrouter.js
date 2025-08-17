const express = require('express');
const { register, login, me } = require('../controllers/authcontroller');
const auth = require('../middlewares/auth');



const authrouter = express.Router();

authrouter.post('/register', register);
authrouter.post('/login', login);
authrouter.get('/me', auth.isAuthenticated, me)

module.exports = authrouter;

