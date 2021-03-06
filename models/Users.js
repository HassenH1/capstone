const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const userSchema = new Schema({
  _id: String,
  username: String,
  password: String,
  email: String,
  address: String, 
  order: [{type: Schema.Types.ObjectId, ref: 'Products'}]
}, {_id: false});


const User = mongoose.model('User', userSchema);

module.exports = User;