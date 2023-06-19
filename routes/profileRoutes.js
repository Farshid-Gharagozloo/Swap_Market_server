const express = require('express');
const router = express.Router();

const {userValidationRules, userValidate} = require('../middleware/userValidation')
const profileControllers = require('../controllers/profileControllers');


router
    .route('/:id')
    .get(profileControllers.getProfileUser)
    .put(userValidationRules, userValidate, profileControllers.editProfileUser);



module.exports = router;