import express from 'express';
import userController from '../controllers/user.controller.js';

const UserRoute = express.Router();

UserRoute.get('/list', userController.list);
UserRoute.get('/:id', userController.detail);

export default UserRoute;