const express = require('express');
const router = express.Router();

const productListControllers = require('../controllers/listControllers');


router
    .route('/')
    .get(productListControllers.getProductList);

router
    .route('/category')
    .get(productListControllers.getListByCategory);

router
    .route('/price')
    .get(productListControllers.getListByPrice);

router
    .route('/interchangeable')
    .get(productListControllers.getListByChangeability);


module.exports = router;

