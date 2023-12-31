const express = require('express');
const router = express.Router();

const messageListControllers = require('../controllers/messageControllers');

router
    .route('/:user/:id')
    .get(messageListControllers.getMessageList)
    .post(messageListControllers.sendTextMessage);
    

router
    .route('/:id')
    .delete(messageListControllers.removeTextMessage);



module.exports = router;