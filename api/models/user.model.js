const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String, unique: true, required: true},
  occupation: String,
  dateOfBirth: Date
});

UserSchema.plugin(mongoosePaginate);
const User = mongoose.model('User', UserSchema);

module.exports = User;
