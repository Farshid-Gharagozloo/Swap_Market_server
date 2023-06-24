const express = require('express');
const router = express.Router();

const {userValidationRules, addUserValidationRules, userValidate} = require('../middleware/userValidation')
const profileControllers = require('../controllers/profileControllers');
const { authorize } = require('../middleware/authorize');




router
    .route('/login')
    .post(profileControllers.login);


router
    .route('/signup')
    .post(addUserValidationRules, userValidate, profileControllers.addProfileUser);


router
    .route('/:id')
    .get(authorize,profileControllers.getProfileUser)
    .put(userValidationRules, userValidate, profileControllers.editProfileUser);
    

module.exports = router;