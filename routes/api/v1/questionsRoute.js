const express = require('express');
const router = express.Router();
const middleware = require('../../../middlewares/middleware');

// require the controllers
const questionController = require('../../../controllers/questionController');

router.use('/:id/options', require('./optionsRoute'));

// get a question
router.get('/:id', middleware.checkDocumentId, questionController.getQuestion);

// create a question
router.post('/create', questionController.createQuestion);

// delete a question
router.delete(
  '/:id/delete',
  middleware.checkDocumentId,
  questionController.deleteQuestion
);

module.exports = router;
