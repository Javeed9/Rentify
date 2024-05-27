const jwt = require('jsonwebtoken');
const conf = require('../config/conf');

const verifyToken = (token) => {
    if (!token) {
        return "Unauthorized: Token missing";
    }
    try {
        const decoded = jwt.verify(token.split(" ")[1], conf.jwtSecretKey);
        return decoded.userId;
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return "Unauthorized: Token expired";
        }
        return "Unauthorized: Invalid token";
    }
};

module.exports = {
    verifyToken
};
