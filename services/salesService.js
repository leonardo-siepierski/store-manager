const model = require('../models/SalesModel');

const getAll = async () => model.getAll();

const getById = async (id) => model.getById(id);

const create = async (sales) => {
  const saleId = await model.newSaleId();
  sales.forEach(async (sale) => {
    await model.create(saleId.insertId, sale.productId, sale.quantity);
  });
  return ({ id: saleId.insertId, itemsSold: sales });
};

module.exports = {
  getAll,
  getById,
  create,
};
