import { Request, Response, NextFunction } from "express";
import { User, UserInterface } from '../models/mongoose/user.mongoose';
import { encode } from 'jwt-simple';
const secret = 'asdasdasd'

export class Auth {

  public static createJWT = (user: any) => {
    const timestamp = new Date().getTime();
    return encode({ sub: user._id, iat: timestamp }, secret);
  }

  public static signUp = (req: Request, res: Response, next: NextFunction) => {
    const email: string = req.body.email;
    const password: string = req.body.password;

    if (!email || !password) {
      return res.status(422).send({error: 'You must provide password and email'});
    }

    User.findOne({ email: email }).then(
      (foundUser: UserInterface) => {
        if (foundUser) {
          return res.status(422).send("User allready exist");
        }

        const newUser: UserInterface = new User({
          email, password
        });

        newUser.save()
          .then(() => {
            res.json({ token: Auth.createJWT(newUser) });
          })
          .catch(
          err => next(err)
        );
      }
    )
  };

}