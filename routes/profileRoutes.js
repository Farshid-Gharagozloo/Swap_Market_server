const express = require('express');
const router = express.Router();

const profileControllers = require('../controllers/profileControllers');


router
    .route('/:id')
    .get(profileControllers.getProfileUser);



module.exports = router;