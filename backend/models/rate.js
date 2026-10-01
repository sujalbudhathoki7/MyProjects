const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  produceItem: { type: String, required: true },
  category: { type: String, required: true },
  marketPrice: { type: Number, required: true },
  eKishanPrice: { type: Number, required: true },
  unit: { type: String, default: 'kg' }
}, { timestamps: true });

module.exports = mongoose.model('Rate', rateSchema);