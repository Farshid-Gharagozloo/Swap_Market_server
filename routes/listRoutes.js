const express = require('express');
const router = express.Router();
const { authorize } = require('../middleware/authorize');


const productListControllers = require('../controllers/listControllers');


router
    .route('/')
    .get(productListControllers.getProductList);

router
    .route('/category/:cat/:id')
    .get(productListControllers.getListByCategory);

router
    .route('/price')
    .get(productListControllers.getListByPrice);

router
    .route('/interchangeable')
    .get(productListControllers.getListByChangeability);

router
    .route('/user/:id')
    .get(authorize, productListControllers.getListByUserId);

router
    .route('/username/:user/:id')
    .get(productListControllers.getListByUsername);

module.exports = router;

