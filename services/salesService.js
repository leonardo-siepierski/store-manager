const model = require('../models/SalesModel');

const getAll = async () => model.getAll();

const getById = async (id) => model.getById(id);

module.exports = {
  getAll,
  getById,
};
