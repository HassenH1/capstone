const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const orderItemSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User"},
  productId: { type: Schema.Types.ObjectId, ref: "Products"},
  Date: { type: Date, default: Date.now },
  OrderProcess: Boolean
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;