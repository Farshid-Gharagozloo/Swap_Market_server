const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productControllers');

const multer  = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(__dirname);
        cb(null, '../public/images')
    },

    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


const upload = multer({ storage: storage });


router
    .route('/add')
    .post(upload.single('image') ,productControllers.addProductItem);

router
    .route('/:id')
    .get(productControllers.getProductItem)
    .put(productControllers.editProductItem);
    
    

module.exports = router;