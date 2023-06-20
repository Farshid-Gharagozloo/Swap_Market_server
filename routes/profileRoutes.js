const express = require('express');
const router = express.Router();

const {userValidationRules, addUserValidationRules, userValidate} = require('../middleware/userValidation')
const profileControllers = require('../controllers/profileControllers');


router
    .route('/login')
    .post(profileControllers.login);

router
    .route('/:id')
    .get(profileControllers.getProfileUser)
    .put(userValidationRules, userValidate, profileControllers.editProfileUser)
    .post(addUserValidationRules, userValidate, profileControllers.addProfileUser);



module.exports = router;