import express from 'express';
import userController from '../controllers/user.controller.js';

const UserRoute = express.Router();

UserRoute.get('/', userController.getAll);
UserRoute.get('/:id', userController.detail);

export default UserRoute;