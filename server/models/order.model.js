const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
  cart: { type: Array, default: [] },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  total: {
    type: Number,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order}