import context from '../configs/connection/mySqlContext';
const table = 'user';
const fetchById = async (id) => {
  return await context(table)
    .where({
      Id: id
    })
    .first();
};

const fetchByQuery = async (query) => {
  return await context(table)
    .where(query)
    .first();
};

const insert = async (dataForm) => {
  return await context(table)
    .insert(dataForm);
}

const fetchAll = async () => {
  return await context(table);
}

export {
  fetchById,
  fetchByQuery,
  insert,
  fetchAll
};
