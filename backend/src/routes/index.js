import express from 'express';
import AuthRoute from './auth';
import UserRoute from './user';

const Router = express.Router();

Router.use('/auth', AuthRoute);
Router.use('/user', UserRoute);

export default Router;
