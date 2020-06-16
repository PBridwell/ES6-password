const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
  password: {
    type: String,
    trim: true,
    required: 'Password is Required'
  },
});
// Export for use in index model
const Password = mongoose.model('Password', PasswordSchema);
module.exports = Password;