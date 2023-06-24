const express = require('express');
const router = express.Router();
const { authorize } = require('../middleware/authorize');
const productControllers = require('../controllers/productControllers');

const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log(__dirname);
        cb(null, path.join(__dirname, '../public/images'))
    },

    filename: (req, file, cb) => {
        // console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router
    .route('/add')
    .post(authorize, upload.single('image'), productControllers.addProductItem);

router
    .route('/categorylist')
    .get(productControllers.getCategoryList);

router
    .route('/:id')
    .get(productControllers.getProductItem)
    .put(productControllers.editProductItem);

module.exports = router;