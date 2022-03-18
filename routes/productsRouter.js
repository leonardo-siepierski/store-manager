const express = require('express');

const { getAll, getById, create, update } = require('../controllers/productController');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);

module.exports = router;