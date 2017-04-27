const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: { unique: true }
  }
});

UserSchema.plugin(findOrCreate);
/**
 * The pre-save hook method.
 */
UserSchema.pre('save', function saveHook(next) {
  const user = this;

  if (!user.isModified('username')) return next();

});

module.exports = mongoose.model('User', UserSchema);