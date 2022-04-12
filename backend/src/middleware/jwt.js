import expressJwt from 'express-jwt';
import { JWT_KEY } from '../configs/constant';

const jwt = () => {
  const secret = JWT_KEY;
  return expressJwt({
    secret,
    algorithms: ['sha1', 'RS256', 'HS256']
  }).unless({
    path: [
      '/api/auth/signin',
      '/api/auth/signup',
      '/api/auth/logout'
    ]
  });
}

export default jwt;
