const mongoose  = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');      // fetching connection string

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('Mongo DB Connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;