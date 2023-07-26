const express = require('express');
const router = express.Router({ mergeParams: true });
const middleware = require('../../../middlewares/middleware');

// require the controllers
const optionController = require('../../../controllers/optionController');

// create an option
router.post(
  '/create',
  middleware.checkDocumentId,
  optionController.createOption
);

// add a vote
router.patch(
  '/:id/add_vote',
  middleware.checkDocumentId,
  optionController.addVote
);

// delete an option
router.delete(
  '/:id/delete',
  middleware.checkDocumentId,
  optionController.deleteOption
);

module.exports = router;
