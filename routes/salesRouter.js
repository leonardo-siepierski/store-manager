const express = require('express');

const { getAll, getById } = require('../controllers/salesController');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;