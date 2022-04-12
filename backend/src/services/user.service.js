import * as userModel from '../model/user.model';

const model = {
  findById: async (id) => {
    return await userModel.fetchById(id);
  },
  create: async (dataForm) => {
    const id = await userModel.insert(dataForm);
    if (id && id[0]) {
      return userModel.fetchById(id[0]);
    }

    return false;
  },
  findByQuery: async (query) => {
    return await userModel.fetchByQuery(query);
  },
  findAll: async () => {
    return await userModel.fetchAll();
  }
};

export default model;