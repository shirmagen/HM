import pify from 'pify';
import { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import createSeed from 'mongoose-dependent-seed';
import seed from './user.seed';

const UserSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  username: {
    required: true,
    type: String,
    unique: true,
  },
  admin: Boolean,
});

UserSchema.virtual('name.full').get(function () {
  return `${this.name.first} ${this.name.last}`;
});

UserSchema.virtual('password').set(function (password) {
  this._password = password;
});

UserSchema.pre('save', function (next) {
  if (!this._password) {
    return next();
  }

  this.setPassword(this._password).then(() => next());
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

UserSchema.methods.setPassword = pify(UserSchema.methods.setPassword);

export default createSeed('User', UserSchema, seed);
