const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `
      SELECT
        sp.sale_id AS saleId,
        s.date,
        sp.product_id AS productId,
        sp.quantity
      FROM StoreManager.sales_products AS sp
      JOIN StoreManager.sales AS s
      ON sp.sale_id = s.id
      ORDER BY saleId ASC, productId ASC
    `,
  );
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(
    `
    SELECT
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales_products AS sp
    JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE sale_id = ?
    `,
    [id],
  );
  return result;
};

const newSaleId = async () => {
  const [result] = await connection.execute(
    `
    INSERT INTO StoreManager.sales ()
    VALUES ()
    `,
  );
  return result;
};

const create = async (saleId, productId, quantity) => {
  await connection.execute(
    `
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)
    `,
    [saleId, productId, quantity],
  );
};

module.exports = {
  getAll,
  getById,
  newSaleId,
  create,
};
