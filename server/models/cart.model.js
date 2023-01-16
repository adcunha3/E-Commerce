const mongoose = require('mongoose');


// Cart Item Schema
const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: Number,
  purchasePrice: {
    type: Number,
    default: 0
  },
  priceWithTax: {
    type: Number,
    default: 0
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = {CartItem}
