import express from 'express';
import authValidator from '../validators/auth';
import validateRequest from '../middleware/validate-request.js';
import authenticationController from '../controllers/authentication.controller.js';

const AuthRoute = express.Router();

AuthRoute.post('/signin', authValidator.signin, validateRequest, authenticationController.signIn);
AuthRoute.post('/signup', authValidator.signup, validateRequest, authenticationController.signUp);
AuthRoute.post('/logout', authenticationController.logOut);

export default AuthRoute;