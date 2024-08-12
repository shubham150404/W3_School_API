const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TutorialSchema  = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Tutorial = mongoose.model('Tutorial', TutorialSchema );

module.exports = Tutorial;