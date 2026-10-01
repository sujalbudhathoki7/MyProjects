const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, required: true, enum: ['Vegetables', 'Fruits', 'Dairy', 'Goods'] },
  price: { type: Number, required: true, min: 0 },
  unit: { type: String, default: 'kg' },
  stockQuantity: { type: Number, default: 100 },
  farmerName: { type: String, required: true },
  location: { type: String, required: true },
  badge: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);