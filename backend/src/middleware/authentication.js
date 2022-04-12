import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../configs/constant';
import { UnauthenticateError } from '../common/errors';

export default async (req, res, next) => {
  try {
    const headers = req.headers;
    if (headers.authorization) {
      const token = (headers.authorization.split(' '))[1];
      const decode = await jwt.verify(token, JWT_KEY, (err, decode) => decode);
      if (decode) {
        if (req.session.id != decode.id) {
          req.session.id = decode.id;
          req.session.email = decode.email;
        }
      } else {
        throw new UnauthenticateError();
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};
