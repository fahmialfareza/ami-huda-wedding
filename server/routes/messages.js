const express = require('express');

const { getMessages, createMessage } = require('../controllers/messages');
const { createMessageValidator } = require('../middlewares/messagesValidator');

const router = express.Router();

router.route('/').get(getMessages).post(createMessageValidator, createMessage);

module.exports = router;
