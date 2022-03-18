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

module.exports = {
  getAll,
  getById,
};
