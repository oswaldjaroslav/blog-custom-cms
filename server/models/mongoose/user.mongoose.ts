import { Document, Schema, Model, model } from 'mongoose';
import { genSalt, hash, compare } from 'bcrypt-nodejs';

export interface UserInterface extends Document {
  email: string;
  password: string;
  hookEnabled: boolean;
  comparePasswords(candidatePassword: string, cb: Function): any;
}

let UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
  hookEnabled: {
    type: Boolean,
    required: false,
    default: true
  }
});

UserSchema.pre('save', function(next) {
  const user: UserInterface = this;
  console.log(user.hookEnabled);
  if (user.hookEnabled) {
    genSalt(7, (err, salt: string) => {
      if (err) { return next(err); }

      hash(user.password, salt, null, (err, hash) => {
        if (err) { return next(err); }
        user.password = hash;
        user.hookEnabled = false;
        next();
      });
    });
  } else {
    next();
  }
});

UserSchema.methods.comparePasswords = function (candidatePassword: string, cb: Function) {
  compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};

export const User: Model<UserInterface> = model<UserInterface>('User', UserSchema);
