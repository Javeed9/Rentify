const dotenv = require('dotenv');
dotenv.config();

const conf = {
    dbUrl: String(process.env.MONGO_URL),
    jwtSecretKey: String(process.env.JWT_SECRET_KEY),
    jwtExpiresIn: String(process.env.JWT_EXPIRES_IN),
    port: process.env.PORT || 3000,
    clientUrl: "",
}

module.exports = conf;