const express = require('express');
const router = express.Router();
// const { authorize } = require('../middleware/authorize');

const messageListControllers = require('../controllers/messageControllers');

router
    .route('/:user/:id')
    .get(messageListControllers.getMessageList);


module.exports = router;