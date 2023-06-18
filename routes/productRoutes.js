const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productControllers');

router
    .route('/:id')
    .get(productControllers.getProductItems);


module.exports = router;