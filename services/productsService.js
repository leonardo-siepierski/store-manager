const model = require('../models/ProductsModel');

const getAll = async () => model.getAll();

const getById = async (id) => model.getById(id);

const create = async ({ name, quantity }) => {
  const product = await model.create(name, quantity);
  return {
    id: product.insertId,
    name,
    quantity,
  };
};

const update = async (id, name, quantity) => model.update(id, name, quantity);

module.exports = {
  getAll,
  getById,
  create,
  update,
};
