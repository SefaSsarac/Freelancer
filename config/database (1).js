require('dotenv').config(); // Load .env variables
const mongoose = require('mongoose'); // Import mongoose

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/projectDB'); 
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;
