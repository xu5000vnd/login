import md5 from 'md5';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../common/errors';
import userService from '../services/user.service.js';

const JWT_KEY = process.env.JWT_KEY
export default {
  // Login
  signIn: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // Check existed user
      const existingUser = await userService.findByQuery({ email });
      if (!existingUser) {
        throw new BadRequestError('Invalid Credentials');
      }

      // Check password
      if (md5(password) != existingUser.password) {
        throw new BadRequestError('Invalid Credentials');
      }

      // Generate JWT
      const userJwt = jwt.sign(
        {
          id: existingUser.id,
          email: existingUser.email
        },
        JWT_KEY
      );

      const user = {
        id: existingUser.id,
        email: existingUser.email,
        token: userJwt
      }
      res.status(200).send({ status: 'ok', user });
    } catch (error) {
      next(error);
    }
  },

  // Sign up
  signUp: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const existingUser = await userService.findByQuery({ email });

      if (existingUser) {
        throw new BadRequestError('Email in use');
      }

      const user = await userService.create({ email, password: md5(password) });
      res.status(200).send({ status: 'ok', message: 'Signup success' });
    } catch (error) {
      next(error);
    }
  },

  // Logout
  logOut: async (req, res) => {
    req.session = null;
    res.status(200).send({});
  }
};