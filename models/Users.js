const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema; 
const userSchema = new Schema({
  _id: String,
  username: String,
  password: String,
  email: String,
  address: String, 
  order: [{type: Schema.Types.ObjectId, ref: 'OrderItems'}]
}, {_id: false});


const User = mongoose.model('User', userSchema);

module.exports = User;