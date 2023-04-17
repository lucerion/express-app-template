const express = require('express');
const { ApplicationController } = require('./controllers');

const router = express.Router();

router.get('/', ApplicationController.index);

module.exports = router;
