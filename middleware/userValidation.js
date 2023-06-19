const { body, validationResult, matchedData } = require('express-validator');

const userValidationRules = [
    body('user_name').notEmpty().withMessage('User name is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('first_name').notEmpty().withMessage('First name is required'),
    body('last_name').notEmpty().withMessage('Last name is required'),
    body('contact_number').notEmpty().withMessage('Contact number is required'),
    body('postal_code').notEmpty().withMessage('Postal code is required'),
    body('email')
      .notEmpty()
      .withMessage('email address is required')
      .isEmail()
      .withMessage('email address is invalid'),
  ];


  const userValidate = (req, res, next) => {
    const result = validationResult(req).formatWith((error) => error.msg);
    const errors = result.array();

    if (!result.isEmpty()) {
        return res.status(400).json(errors[0]);
    }

    const filteredData = matchedData(req);

    req.body = filteredData;

    next();

  }

  module.exports = {
    userValidationRules,
    userValidate
  }