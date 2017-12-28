import { Strategy, IStrategyOptionsWithRequest } from 'passport-local';
import { User, UserInterface } from '../models/mongoose/user.mongoose';
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from 'passport-jwt';
import { Passport, use } from 'passport';
const secret = 'asdasdasd'

const localOptions = {
  usernameField: 'email',
}

const LocalLogin = new Strategy(localOptions, (email, password, done: any) => {
  User.findOne({ email })
    .then(
      (foundUser: UserInterface) => {
        if (!foundUser) { return done(null, false); }
        foundUser.comparePasswords(password, (err: any, isMatch: any) => {
          if (err) { return done(err); }
          if (!isMatch) { return done(null, false); }
          return done(null, foundUser);
        });
      }
    )
    .catch( err => done(err) )
});

const JwtOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
}

const JwtLogin = new JwtStrategy(JwtOptions, (payload, done) => {
  User.findById(payload.sub)
    .then(
      (foundUser: UserInterface) => {
        if (foundUser) {
          return done(null, foundUser);
        } else {
          return done(null, false);
        }
      }
    )
    .catch( err => done(err, false) )
});

use(LocalLogin);
use(JwtLogin);