const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const uniqueValidator = require('mongoose-unique-validator');
const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = new mongoose.Schema({
  firstName: {type: String, trim: true, required: [true,'first name is required']},
  lastName: {type: String, trim: true, required: [true,'last name is required']},
  email: {type: String,
          trim: true,
          unique: true,
          required: [true, 'email is required'],
          validate: [validateEmail, 'invalid email address'],
          match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'invalid email address']},
  occupation: {type: String, trim: true, required: [true, 'occupation is required']},
  dateOfBirth: {type: Date, required: [true, 'date of birth is required']},
  photo: {type: String}
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} already exists!' });
UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema);

module.exports = User;
