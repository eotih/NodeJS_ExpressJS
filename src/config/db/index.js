const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/EOTIH_Education', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        });
        console.log('Connected')
    } catch (error) {
        console.log('Fail')
    }
}

module.exports = { connect }