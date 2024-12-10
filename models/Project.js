const mongoose = require('mongoose');

// ▼ Creating project schema for database ▼
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    
    description: { type: String, required: true },
   
    imagePath: { type: String }, 
   
    createdAt: { type: Date, default: Date.now }




});

module.exports = mongoose.model('Project', projectSchema);
