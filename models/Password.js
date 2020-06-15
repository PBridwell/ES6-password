const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is Required'
  },
});
// Export for use in index model
const Password = mongoose.model('Password', PasswordSchema);
module.exports = Password;