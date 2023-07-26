const mongoose = require('mongoose');

module.exports.checkDocumentId = function (req, res, next) {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Please provide valid id',
      });
    }
    next();
  } catch (err) {
    console.log('***** Error in checkDocumentId Middleware ****');
    return res.status(500).json({
      message: 'Internal Server Error',
      error: err,
    });
  }
};
