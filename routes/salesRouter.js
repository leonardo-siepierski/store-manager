const express = require('express');

const { getAll, getById, create, update, deleteSale } = require('../controllers/salesController');
const { idValidation, quantityValidation } = require('../middlewares/bodyValidationSale');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post(
  '/',
  idValidation,
  quantityValidation,
  create,
);
router.put(
  '/:id',
  idValidation,
  quantityValidation,
  update,
);
router.delete('/:id', deleteSale);

module.exports = router;