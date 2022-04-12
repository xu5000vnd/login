import { NotFoundError } from '../common/errors';
import userService from '../services/user.service.js';

export default {
  // get list user
  list: async (req, res, next) => {
    try {
      let list = await userService.findAll();
      list = list.map(item => {
        return { id: item.id, email: item.email };
      })
      res.status(200).send({
        data: list
      });
    } catch (error) {
      next(error);
    }
  },
  detail: async (req, res, next) => {
    try {
      const { id } = req.params;
      const detail = await userService.findById(id);
      if (!detail) {
        throw new NotFoundError();
      }

      res.status(200).send({
        data: detail
      });
    } catch (error) {
      next(error);
    }
  },
}