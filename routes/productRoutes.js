const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productControllers');

router
    .route('/:id')
    .get(productControllers.getProductItem)
    .put(productControllers.editProductItem);



module.exports = router;