const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  tutorials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tutorial' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;