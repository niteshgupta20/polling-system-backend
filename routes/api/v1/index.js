const express = require('express');
const router = express.Router();

router.use('/questions', require('./questionsRoute'));
router.use('/options', require('./optionsRoute'));

module.exports = router;
