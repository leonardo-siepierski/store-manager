const express = require('express');

const { getAll, getById, create } = require('../controllers/salesController');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);

module.exports = router;