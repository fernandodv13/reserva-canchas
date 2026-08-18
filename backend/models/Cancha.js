const mongoose = require('mongoose');

const canchaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, enum: ['futbol', 'padel', 'tenis'], required: true },
  precioPorHora: { type: Number, required: true },
  disponible: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Cancha', canchaSchema);