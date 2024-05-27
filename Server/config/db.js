const mongoose = require('mongoose');
const conf = require('./conf');

const connectDb = async () => {
    try {
        await mongoose.connect(conf.dbUrl);
        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.log('Error connecting to Db', err.message);
    }
}

module.exports =  connectDb;